<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Order extends Model
{
    use HasFactory;

    public function orders()
    {
        return $this->hasMany(Order::class);
    }


    protected $fillable = [
        'user_id',
        'product_id',
        'total_price',
        'quantity',
        'order_number',
        'sub_total',
        'status',
        'first_name',
        'last_name',
        'email',
        'payment_method',
        'payment_status',
   ];
   
}
