<?php
/*Route::get('/', function () {
    return view('app');
});

Route::get('{all}', function () {
    return view('app');
});*/

Route::get('/{any}', 'AppController@index')->where('any', '.*');
