<?php

namespace App\Http\Controllers\Online;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use Cart;



use price;

class cartController extends Controller
{
        public function index()
  {
    $cartItems = Cart::content();
      return view('products.cart' , compact('cartItems'));
  }

  public function addToCart(Request $request)
  {
      // Retrieve the product from the database based on the request
      $product = Product::find($request->id);


      if (!$product) {
        return redirect()->back()->with(['error','Product not found. ']);
    }

        // Determine the price based on sale or regular price
        $price = $product->sale_price ?? $product->regular_price;

          // Define the quantity
        $quantity = $request->quantity ?? 1;

         // Add the product to the cart
        Cart::instance('cart')->add([
            'id' => $product->id,
            'name' => $product->name,
            'qty' => $quantity,
            'price' => $price,
        ])->associate('App\Models\Product');

       // Return a success message
       return redirect()->route('cart')->with(['message','Product added to cart successfully.']);

 }
}






