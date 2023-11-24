<?php

namespace App\Http\Controllers\Online;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Gloudemans\Shoppingcart\Facades\Cart;


class cartController extends Controller
{
        public function index()
    {
    $cartItems = Cart::instance('cart')->content();

       return view('products.cart',['cartItems'=>$cartItems]);

    }
}
