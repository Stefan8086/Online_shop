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
        $request -> validate([
            'email' => 'required|email' ,
            'password' => 'required' 
        ]);
        
        $credentials = $request->only('email','password');
        if(Auth::attempt($credentials)) {
            return redirect()->intended('/home')
                ->withSuccess('Signed in');
        }
           
        }

    
    public function logout()
    {
        session::flush();
        Auth::logout();


        return redirect('/login');
    }

 }
