<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cart extends Model
{
    use HasFactory;


    public function cart()
    {
        return $this->belongsTo(cart::class);
    }

    protected $fillable = [
        'name',
        'slug',
        'description',
        'sale_price',
        'regular_price',
        'image',
        'quantity' ,
        'status',
        'discount',

   ];
}
