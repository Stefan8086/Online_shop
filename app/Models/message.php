<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class message extends Model
{
    use HasFactory;

    public $fillable=['name',
    'message',
    'email',
    'phone',
    'read_at',
    'photo',
    'subject'
];

}
