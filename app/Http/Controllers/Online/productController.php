<?php

namespace App\Http\Controllers\Online;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
class productController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return view('products.product', compact('products'));
    }

    public function productCarts($slug)
    {
        $product = Product::where('slug',$slug)->first();
        return view('products.cart',['product'=>$product]);
    }


}
