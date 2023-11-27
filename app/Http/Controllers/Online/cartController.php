<?php

namespace App\Http\Controllers\Online;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Cart;
use App\Models\Product;

class cartController extends Controller
{
        public function index()
  {

      return view('products.cart');

  }

   
}
