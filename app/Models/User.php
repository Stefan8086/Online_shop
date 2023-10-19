<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory;
    protected $fillable = [
        'firstname' ,
        'lastname' ,
        'email' ,
        'password' ,
        'activation_token' ,
        'register_ip' ,
        'active' ,
    ];
}