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
use App\Mail\verifyActive;
use Illuminate\Auth\Events\Login;
use Illuminate\Mail\Mailer;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use App\Http\Auth\Auth;
use Illuminate\Support\Facades\Auth as FacadesAuth;

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
            'password' => 'required|confirmed|min:5|max:12' 
        ]);

        //if validator has ben faild
        if ($validator->fails()) {
            return redirect(route('register'))
                        ->withErrors($validator)
                        ->withInput();
       } else {

        //if validator has ben faild
       $user = new User([
        'firstname' => $request->firstname ,
        'lastname' => $request->lastname ,
        'email' => $request->email , 
        'password' => bcrypt($request->password) ,
        'activation_token' => Str::random(60) ,
        'register_ip' => $request->ip() ,
        ]);

       $user->save();

        Mail::to($user->email)->send(new userSignup($user));

      
           return back()->with('success','You have registered successfuly'); 
           }
        }
        // user active with signup email
        public function userActive($token)
        {

          $user = User::where('activation_token',$token)->first();
        //if user activation token has not Exist   
          if(!$user){

            return redirect(route('login'))->with('error','This activation token is invalid .');
        //if user activation token has Exist
          } else {

            $user->active = true;
            $user->email_verified_at = Carbon::now();
            $user->activation_token= '';
            $user->save();

            Mail::to($user->email)->send(new verifyActive($user));

          
            return redirect(route('login'))->withSuccess('User has ben active');
          }   
       }
    }
    
   

