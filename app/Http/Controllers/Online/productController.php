<?php

namespace App\Http\Controllers\Online;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use Auth;
use Illuminate\View\View;


class productController extends Controller
{
    public function __construct()
    {
       $this->middleware('auth')->except('index','productDetails');
    }
    public function index()
    {

        $products = Product::all();

        return view('products.product', compact('products'));
    }

    public function productDetails()
    {
        $product = Product::findOrFail(1);
        return view('products.details', compact('product'));
    }

    public function productDetails2()
    {
        $product = Product::findOrFail(2);
        return view('products.details', compact('product'));
    }

    public function productDetails3()
    {
        $product = Product::findOrFail(3);
        return view('products.details', compact('product'));
    }

 }









