<?php

namespace App\Http\Controllers\Online;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Controller\Online\CartService;
use App\Controller\Online\ProductService;
use Gloudemans\Shoppingcart\Facades\Cart;
use App\Http\Controllers\ProductValidation;


use price;

class cartController extends Controller
{
        public function index()
  {
    $cartItems = Cart::instance('cart')->content();
      return view('products.cart' , ['cartItems'=>$cartItems]);

  }



  public function addToCart(Request $request)
  {
      $product = Product::find($request->id);

      if (!$product) {
        // Return an error message
        return redirect()->back()->with(['error' => 'Product not found. ']);
    }

        $price = $product->sale_price ? $product->sale_price : $product->regular_price;
        $quantity = 1;
        Cart::instance('cart')->add($product->id, $product->name, qty:$quantity, price:$price)
        ->associate('App\Models\Product');
       // Return a success message
       return redirect()->back()->with(['message' => 'Product added to cart successfully.']);

 }
}






