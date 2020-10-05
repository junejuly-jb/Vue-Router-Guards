<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['auth:api']], function(){
    Route::post('/addNote', 'App\Http\Controllers\API\ApiController@addNote');
    Route::get('/getAllUsers', 'App\Http\Controllers\API\ApiController@getAllUsers');
    Route::get('/profile', 'App\Http\Controllers\API\ApiController@profile');
});

Route::post('/login', 'App\Http\Controllers\API\ApiController@login');
Route::post('/register', 'App\Http\Controllers\API\ApiController@register');


