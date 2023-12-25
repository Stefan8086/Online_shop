<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class Product extends Model
{
    use HasFactory;

    public function product()
    {
       return $this->belongsTo(product::class);
    }



    protected $table = 'products';

    protected $fillable = [
        'name',
        'description',
        'price',
        'image',
        'quantity' ,
        'status',
        'discount',
    ];


}
