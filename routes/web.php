<?php

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





Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

// Login
Route::get('/login', [App\Http\Controllers\Auth\LoginController::class,'login'])->name('login');
Route::post('/login' , [App\Http\Controllers\Auth\LoginController::class,'loginUser'])->name('login.user');

// Register
Route::get('/register', [App\Http\Controllers\Auth\RegisterController::class, 'register'])->name('register');
Route::post('/register' , [App\Http\Controllers\Auth\RegisterController::class,'registerUser'])->name('register.user');

// Logout
Route::post('/logout' , [App\Http\Controllers\Auth\LoginController::class, 'logout'])->name('logout');






Route::get('/service', [App\Http\Controllers\Online\serviceController::class, 'index'])->name('service');




// Product
Route::get('/product', [App\Http\Controllers\Online\productController::class, 'index'])->name('product');
Route::get('/products/details/1', [App\Http\Controllers\Online\productController::class, 'productDetails1'])->middleware('auth')->name('product.details1');
Route::get('/products/details/2', [App\Http\Controllers\Online\productController::class, 'productDetails2'])->middleware('auth')->name('product.details2');
Route::get('/products/details/3', [App\Http\Controllers\Online\productController::class, 'productDetails3'])->middleware('auth')->name('product.details3');
//Route::get('/order', [App\Http\Controllers\Online\OrderController::class, 'order'])->name('order');
//Route::post('/order', [App\Http\Controllers\Online\OrderController::class, 'order'])->name('order');


//Cart
Route::get('/cart', [App\Http\Controllers\Online\cartController::class, 'index'])->name('cart');
Route::post('/cart/add/{id}', [App\Http\Controllers\Online\cartController::class, 'addToCart'])->name('cart.add');
Route::put('/cart/update', [App\Http\Controllers\Online\cartController::class, 'updateCart'])->name('cart.update');
Route::delete('/cart/remove', [App\Http\Controllers\Online\cartController::class, 'removeCart'])->name('cart.remove');
Route::delete('/clear', [App\Http\Controllers\Online\cartController::class, 'clearAllCart'])->name('cart.clear');

// search
Route::post('/search' , [App\Http\Controllers\Online\searchController::class, 'index'])->name('search');


Route::get('/contact', [App\Http\Controllers\Online\contactController::class, 'index'])->name('contact');
//Route::get('/admin' , [App\Http\Controllers\Administrator\AdminController::class,'index'])->name('admin');

 // mail send and verify
Route::get('/active/{token}', [App\Http\Controllers\Auth\RegisterController::class, 'userActive'])->name('active');



Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
