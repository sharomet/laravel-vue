<?php
/*Route::get('/', function () {
    return view('welcome');
});*/
/*Route::get('/', function () {
    return view('app');
});

Route::get('{all}', function () {
    return view('app');
});*/


Route::get('/{any}', 'AppController@index')->where('any', '.*');

/*Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');*/