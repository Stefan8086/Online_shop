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
        try {
         // Assuming you have three products in your database with IDs 1, 2, and 3
        $detailsId = [1, 2, 3];

         // Check if the provided ID is one of the expected IDs
         if (!in_array($id, $detailsId)) {
            return response()->view('errors.404', [], 404);
        }

        // Fetch the product details based on the provided ID
        $product = Product::findOrFail($id);

        return view('products.details', compact('product'));


    } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
        // Handle the exception (e.g., redirect to a 404 page)
        return response()->view('errors.404', [], 404);
        }


    }


 }







