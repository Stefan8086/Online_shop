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

    public function productDetails($id)
    {

        $product = Product::find($id);



        return view('products.details', compact('product'));

    }


 }







