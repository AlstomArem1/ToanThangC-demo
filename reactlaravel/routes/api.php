<?php

use App\Http\Controllers\Api\RegisterController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('signup',[UserController::class, 'register'])->name('signup');
Route::post('signin',[UserController::class, 'login'])->name('signin');
Route::post('shop',[UserController::class, 'addProduct'])->name('addProduct');


