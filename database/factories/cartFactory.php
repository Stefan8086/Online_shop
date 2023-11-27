<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\cart>
 */
class cartFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $cart_name = $this->faker->unique()->words($nb=2,$asText = true);
        $slug = Str::slug($cart_name);
        return [
            'name' => Str::title($cart_name),
            'slug' => $slug,
            'description' => $this->faker->paragraph(1),
            'sale_price' => $this->faker->numberBetween(100,5000),
            'regular_price' => $this->faker->numberBetween(100,5000),
            'image' => 'default.jpg' ,
            'quantity' => $this->faker->numberBetween(1,5),
            'status' => $this->faker->randomElement(['active','inactive']),
            'discount' => $this->faker->numberBetween(1,50),
        ];
    }
}
