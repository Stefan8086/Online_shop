<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\cart>
 */
class productFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $product_name = $this->faker->unique()->words($nb=2,$asText = true);
        $image_name = $this->faker->numberBetween(1,24).'.jpg';
        return [
            'name' => Str::title($product_name),
            'description' => $this->faker->paragraph(1),
            'sale_price' => $this->faker->numberBetween(100,5000),
            'regular_price' => $this->faker->numberBetween(100,5000),
            'image' => $image_name ,
            'images' => $image_name ,
            'quantity' => $this->faker->numberBetween(1,5),
            'status' => $this->faker->randomElement(['active','inactive']),
            'discount' => $this->faker->numberBetween(1,50),
        ];
    }
}
