<?php

namespace App\Http\Controllers\Online;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\cart;
use Illuminate\Support\Facades\Auth;
use Stripe\StripeClient;
use Illuminate\View\View;

class checkoutController extends Controller
{
       public function index()
    {
            return view('products.checkout');
    }

      public function Checkout(Request $request)
    {
            $stripe = new \Stripe\StripeClient(env('STRIPE_SECRET'));

            $redirectUrl = route('stripe.checkout.success').'?session_id={CHECKOUT_SESSION_ID}';
            $response =  $stripe->checkout->sessions->create([
                    'success_url' => $redirectUrl,
                    'customer_email' => 'demo@gmail.com',
                    'payment_method_types' => ['link', 'card'],
                    'line_items' => [
                        [
                            'price_data'  => [
                                'product_data' => [
                                    'name' => $request->product,
                                ],
                                'unit_amount'  => 100 * $request->price,
                                'currency'     => 'USD',
                            ],
                            'quantity'    => 1
                        ],
                    ],
                    'mode' => 'payment',
                    'allow_promotion_codes' => true
                ]);

            return redirect($response['url']);
        }

        public function stripeCheckoutSuccess(Request $request)
        {
            $stripe = new \Stripe\StripeClient(env('STRIPE_SECRET'));

            $session = $stripe->checkout->sessions->retrieve($request->session_id);
            info($session);

            return redirect()->route('stripe')
                             ->with('success', 'Payment successful.');

}
}
