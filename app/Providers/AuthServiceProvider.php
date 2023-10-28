<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Passpord;
use laravel\Passport\Passport;
use Carbon\Carbon;
use Illuminate\Support\Facades\route;



class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
       // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
      $this->registerPolicies();
   
      
      Passport::tokensExpireIn(now()->addDays(30));
      Passport::refreshTokensExpireIn(now()->addDays(30));
      Passport::personalAccessTokensExpireIn(now()->addMonth(6));
  }
  }

