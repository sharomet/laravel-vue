<?php
use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/posts', 'PostController@index');

Route::post('/create', 'PostController@create');

Route::get('/categories', 'CategoriesController@index');
Route::get('/category/{id}', 'CategoriesController@getCategory');

Route::post('/category', [
    'uses' => 'CategoriesController@addCategory',
    'middleware' => 'auth.jwt'
]);
Route::delete('/category/{id}', [
    'uses' => 'CategoriesController@deleteCategory',
    'middleware' => 'auth.jwt'
]);

Route::get('/products/{id}', 'ProductsController@index');
Route::get('/product/{id}', 'ProductsController@getProduct');

Route::post('/signin', [
    'uses' => 'AuthController@signin'
]);
Route::post('/signup', [
    'uses' => 'AuthController@signup'
]);