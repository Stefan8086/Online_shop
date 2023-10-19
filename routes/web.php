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
Route::get('login', [App\Http\Controllers\Auth\LoginController::class, 'index'])->name('login');
Route::post('login-post', [App\Http\Controllers\Auth\LoginController::class, 'postLogin'])->name('login.post'); 
Route::get('register', [App\Http\Controllers\Auth\RegisterController::class, 'register'])->name('register');
Route::post('register-post', [App\Http\Controllers\Auth\RegisterController::class, 'postRegister'])->name('register.post'); 
Route::get('dashboard', [App\Http\Controllers\Auth\RegisterController::class, 'dashboard']); 
Route::get('logout', [App\Http\Controllers\Auth\LoginController::class, 'logout'])->name('logout');

Route::get('/service', [App\Http\Controllers\Online\serviceController::class, 'index'])->name('service');
Route::get('/product', [App\Http\Controllers\Online\productController::class, 'index'])->name('product');
Route::get('/contact', [App\Http\Controllers\Online\contactController::class, 'index'])->name('contact');

