<?php
use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/posts', 'PostController@index');

Route::post('/create', 'PostController@create');

Route::get('/login', function(){
  return response()->json([
    'user' => [
      'name' => 'Alex'
    ]
  ]);
});

Route::post('/login', function(Request $request){
  return $request->all();
});

Route::get('/categories', 'CategoriesController@index');
Route::get('/products/{_id}', 'ProductsController@index');
