<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class checkout extends Model
{
    use HasFactory;


    protected $table = 'checkouts';

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
        'phone' ,
    ];

}
