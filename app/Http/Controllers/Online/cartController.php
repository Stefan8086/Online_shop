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

  public function addToCart(Request $request)
  {
      Cart::add([
          'id' => $request->id,
          'name' => $request->name,
          'price' => $request->price,
          'quantity' => $request->quantity,
          'image' => $request->image,

      ]);
      session()->flash('success', 'Product is Added to Cart Successfully !');

      return redirect()->route('cart');
  }

  public function updateCart(Request $request)
  {
    $rowId = $request->rowId;
    $quantity = $request->quantity;

     // Make sure the rowId exists in the cart
     $cartItem = Cart::get($rowId);

     if (!$cartItem) {
        session()->flash('error', 'Product not found in the cart.');
        return redirect()->route('cart');
    }

     // Update the quantity
     Cart::update($rowId, [
        'quantity' => $quantity,
    ]);

      session()->flash('success', 'Item Cart is Updated Successfully !');
      return redirect()->route('cart');
  }

  public function removeCart(Request $request)
  {
      Cart::remove($request->id);
      session()->flash('success', 'Item Cart Remove Successfully !');

      return redirect()->route('cart');
  }

  public function clearAllCart()
  {
      Cart::clear();

      session()->flash('success', 'All Item Cart Clear Successfully !');

      return redirect()->route('cart');
  }
 }







