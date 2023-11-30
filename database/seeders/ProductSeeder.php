<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            [
                'name' => 'Php',
                'description' => 'Learning Php',
                'image' => "{{ asset('assets/image/20.jpg')}}",
                'price' => 2400
            ],
            [
                'name' => 'Html,Css,Js',
                'description' => 'Learning Html, Css, Js',
                'image' => "{{ asset('assets/image/21.jpg')}}",
                'price' => 1200
            ],
            [
                'name' => 'Laravel',
                'description' => 'Learning Laravel',
                'image' => "{{ asset('assets/image/22.jpg')}}",
                'price' => 2800
            ],

        ];

        foreach ($products as $key => $value) {
            Product::create($value);
        }
    }

}
