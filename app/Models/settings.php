<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class settings extends Model
{
    use HasFactory;


    protected $table = 'settings';

    protected $fillable = [
        'key',
        'display_name',
        'value',
        'details',
        'type' ,
        'group',
        'order',
    ];

}
