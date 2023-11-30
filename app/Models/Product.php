<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public function index()
    {
        $products = Product::all();
        return $products;
    }

    protected $fillable = [
        'name',
        'description',
        'image',
        'price',
    ];
}
