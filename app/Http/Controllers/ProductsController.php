<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Products;

class ProductsController extends Controller
{
    public function index($id)
    {
      return Products::where('category_id', $id)->get();
    }

    public function getproduct($id)
    {
      return Products::find($id);
    }
}
