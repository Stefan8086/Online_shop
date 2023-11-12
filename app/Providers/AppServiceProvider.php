<?php

namespace App\Providers;

use App\Models\Cashier\User;
use Illuminate\Support\ServiceProvider;
use Laravel\Paddle\Cashier;
use Laravel\Cashier\calculate;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        Cashier::ignoreMigrations();
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Cashier::useCustomerModel(User::class);
        
        
    }
}
