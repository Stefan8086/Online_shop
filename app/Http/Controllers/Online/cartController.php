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
    $details = Product::all();
      return view('products.cart' , compact('details'));
  }

  public function addToCart($id)
  {
      // Retrieve the product from the database based on the request
      $product = Product::findOrFail($id);


      $cart = session()->get('cart', []);

      if (isset($cart[$id])) {
        $cart[$id]['quantity']++;

      } else {
        $cart[$id] = [
            'name' => $product->name,
            'quantity' => 1,
            'price' => $product->price,
            "image" => $product->image

        ];
    }

        session()->put('cart', $cart);

        return redirect()->back();
    }

    public function update(Request $request)
    {
        if($request->id && $request->quantity){
            $cart = session()->get('cart');
            $cart[$request->id]["quantity"] = $request->quantity;
            session()->put('cart', $cart);
            session()->flash('success', 'Cart updated successfully');
        }
    }

    public function remove(Request $request)
    {
        if($request->id) {
            $cart = session()->get('cart');
            if(isset($cart[$request->id])) {
                unset($cart[$request->id]);
                session()->put('cart', $cart);
            }
            session()->flash('success', 'Product removed successfully');
        }
    }
 }







