<?php

namespace App\Http\Controllers\Online;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use Cart;


class cartController extends Controller
{
        public function index()
  {
    $details = Cart::instance('cart')->content();
      return view('products.cart' , compact('details'));
  }

  public function addToCart($id)
  {
    $product = Product::findOrFail($id);

    $cart = session()->get('cart', []);

    if(isset($cart[$id])) {
        $cart[$id]['quantity']++;
    } else {
        $cart[$id] = [
            "name" => $product->name,
            "quantity" => 1,
            "price" => $product->price,
            //TO DO
            "image" => asset('assets/image/1.png')
        ];
    }

    session()->put('cart', $cart);
    return redirect()->back();
}

  public function updateCart(Request $request)
  {
    if($request->id && $request->quantity){
        $cart = session()->get('cart');
        $cart[$request->id]["quantity"] = $request->quantity;
        session()->put('cart', $cart);
        session()->flash('success', 'Cart updated successfully');
    }
   }

  public function removeCart(Request $request)
  {
    if($request->id) {
        $cart = session()->get('cart');
        if(isset($cart[$request->id])) {
            unset($cart[$request->id]);
            session()->put('cart', $cart);
        }
        session()->flash('success', 'Product removed successfully');
    }
    return redirect()->back();
  }

  public function clearAllCart()
  {
      Cart::clear();

      session()->flash('success', 'All Item Cart Clear Successfully !');

      return redirect()->route('cart');
  }
}









