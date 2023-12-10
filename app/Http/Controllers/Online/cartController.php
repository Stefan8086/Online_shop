<?php

namespace App\Http\Controllers\Online;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Cart;
use App\Models\Product;
use App\Controller\Online\CartService;
use App\Controller\Online\ProductService;
use Gloudemans\Shoppingcart\CartItem;
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

      // Check if the product exists
      if ($product) {
        $price = $product->price;
        $quantity = 1;
        Cart::instance('cart')->add($product->id, $product->name, qty:$quantity, price:$price)
        ->associate(Product::class);
       // Return a success message
       return response()->with(['message' => 'Product added to cart successfully.']);
  } else {
    // Return an error message if the product does not exist
    return response()->with(['error' => 'Product not found.'], 404);
  }
 }
}






