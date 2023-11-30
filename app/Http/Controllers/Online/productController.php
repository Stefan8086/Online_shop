<?php

namespace App\Http\Controllers\Online;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\View\View;


class productController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return view('products.product', compact('products'));
    }

    public function productDetails()
    {

        $products = Product::all();
        return view('products.details');
    }

}
