<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Mail;
use App\Mail\userSignup;

class RegisterController extends Controller
{
    
    public function register()
    {
        return view('auth.register');
    }
    public function registerUser(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'firstname' => 'required' ,
            'lastname' => 'required' ,
            'email' => 'required|email|unique:users' ,
            'password' => 'required|confirmed|min:8|max:12' 
        ]);
          
        if ($validator->fails()) {
            return redirect('register')
                        ->withErrors($validator)
                        ->withInput();
        }
       $user = new User([
        'firstname' => $request->firstname ,
        'lastname' => $request->lastname ,
        'email' => $request->email , 
        'password' => bcrypt($request->password) ,
        'activation_token' => Str::random(60) ,
        'register_ip' => $request->ip() ,
        ] , 201);
        $user->save();

        Mail::to($user->email)->send(new userSignup($user));
        if($user){
           return back()->with('success' , 'You have registered successfuly'); 
        }else{
            return back()->with('fail' , 'Something wrong');
        }


    }
}
