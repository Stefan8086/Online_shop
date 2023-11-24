<?php

namespace App\Http\Controllers\Online;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
class productController extends Controller
{
    public function index()
    {

    $products = Product::orderBy('created_at', 'DESC')->paginate(12);
        return view('products.product');
    }

    public function productDetails($slug)
    {
        $product = Product::where('slug',$slug)->first();
       return view('products.Details');
    }
}
