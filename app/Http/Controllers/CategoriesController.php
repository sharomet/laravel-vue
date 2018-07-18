<?php

namespace App\Http\Controllers;

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
}
