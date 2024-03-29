<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class settings extends Model
{
    use HasFactory;

    protected $fillable=[
    'short_des',
    'description',
    'photo',
    'address',
    'phone',
    'email',
    'logo'
];
}
