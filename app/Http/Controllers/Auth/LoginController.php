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
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Session as FacadesSession;
use Illuminate\Support\Facades\Validator;



class LoginController extends Controller
{
    
    public function login()
    {
        return view('Auth.login');
    }

    public function loginUser(Request $request)
    { 
        $validator = Validator::make($request->all(),[
            'email' => 'required|email|unique:users' ,
            'password' => 'required|confirmed|min:5|max:12' 
        ]);

        //if validator has ben faild
        if ($validator->fails()) {
           return redirect(route('login'))
                        ->withErrors($validator)
                        ->withInput();
        }

        $credentials = $request->only('email','password');

        // if user das not exit
        if(!Auth::attempt($credentials)) {
            return redirect(route('login'))
                ->withErrors('Unfortunately, no user was found with this email');
        } 

            $user = Auth::user();

            // if user email has not verifed return this messege
             if (!$user->hasVerifiedEmail()) {
              return redirect(route('login'))->withErrors('Email has not verified'); 
        }
    }
    
    public function logout()
    {
        session::flush();
        Auth::logout();


        return redirect(route('home'));
    }

 }
