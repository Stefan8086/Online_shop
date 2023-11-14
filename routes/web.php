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





Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

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


Route::get('/order', [App\Http\Controllers\Online\OrderController::class, 'order'])->name('order');
Route::get('/order', "HomeController@orderIndex")->name('user.order.index');
Route::get('/order/show/{id}', "HomeController@orderShow")->name('user.order.show');
Route::delete('/order/delete/{id}', [HomeController::class, 'userOrderDelete'])->name('user.order.delete');



Route::get('/contact', [App\Http\Controllers\Online\contactController::class, 'index'])->name('contact');
//Route::get('/admin' , [App\Http\Controllers\Administrator\AdminController::class,'index'])->name('admin');

 // mail send and verify
Route::get('/active/{token}', [App\Http\Controllers\Auth\RegisterController::class, 'userActive'])->name('active');

