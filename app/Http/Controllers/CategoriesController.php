<?php

namespace App\Http\Controllers;

use JWTAuth;
use Illuminate\Http\Request;
use App\Categories;

class CategoriesController extends Controller
{
    public function index() 
    {
      return Categories::all();
    }

    public function getCategory($id)
    {
      return Categories::find($id);
    }

    public function addCategory(Request $request)
    {
      $user = JWTAuth::parseToken()->authenticate();
      $category = new Categories();
      $category->name = $request->input('name');
      $category->description = $request->input('description');
      $category->image = $request->input('image');
      $category->save();
      return response()->json([
        'category' => $category,
        'user' => $user
      ], 201);
    }

    public function deleteCategory(Request $request, $id)
    {
      $category = Categories::find($id);
      $category->delete();
      return response()->json(['message' => 'Category Deleted'], 200);
    }
}
