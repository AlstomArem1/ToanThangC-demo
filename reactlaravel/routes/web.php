<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::prefix('admin')->name('admin.')->group(function(){
    Route::get('user',[UserController::class, 'index'])->name('users.index');

    Route::get('category',[CategoryController::class, 'index'])->name('categories.index');
    //Add
    Route::get('category/add',[CategoryController::class, 'add'])->name('categories.add');
    //Store
    Route::post('category/store',[CategoryController::class, 'store'])->name('categories.store');
    //Detail
    Route::get('category/{product_category}', [CategoryController::class, 'detail'])->name('categories.detail');
    //Delete
    Route::get('category/destroy/{product_category}', [CategoryController::class, 'destroy'])->name('categories.destroy');
    //update
    Route::post('category/update/{product_category}', [CategoryController::class, 'update'])->name('categories.update');

     //Product
     Route::resource('product',ProductController::class);
     //Create//
     //uploadImage
     Route::post('product/Ckeditor-upload-image',[ProductController::class,'Uploadimage'])->name('product.ckedit.upload.image');
     //Slug
     Route::post('product/slug',[ProductController::class,'Slug'])->name('product.create.slug');
     //Edit//
     //update//
     //Restore
     Route::get('product/{product}/restore',[ProductController::class, 'restore'])->name('product.restore');
});


