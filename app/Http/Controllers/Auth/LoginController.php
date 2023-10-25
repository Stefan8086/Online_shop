<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Session;
use App\Models\User;
use App\Models\UserVerify;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Mail; 
use Illuminate\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    
    public function login()
    {
        return view('Auth.login');
    }

    public function loginUser(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email' ,
            'password' => 'required' 
        ]);

        if ($validator->fails()) {
            return redirect('login')
                        ->withErrors($validator)
                        ->withInput();
        }
        return back()->withErrors(['email' => 'Your provided credentials do not match in our records.'])->onlyInput('email');

        $cerdinentals = request(['email','password']);
        if(!Auth::attempt($cerdinentals)){
            return redirect('login')
                ->withErrors(['message' => 'unauthorized']);
        }

        $user = Auth::user();
         
         //if user email has not verified return this message
         if(!$user->hasVerifiedEmail()){
            return redirect('login')
                ->withErrors(['message' => 'Email has not verified']);
       

         }

         $tokenResult = $user->createToken('Login Token');
         $token = $tokenResult->token;

         return response()->json([
            'access_token' => $token->accessToken,
            'token_type' => 'Bearer' ,
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeLocalString(),

            ]);
    }

 }
