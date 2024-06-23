<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;
use Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful; // Import Sanctum middleware

class Kernel extends HttpKernel
{
    // Other middleware definitions...

     /**
     * The application's global HTTP middleware stack.
     *
     * These middleware are run during every request to your application.
     *
     * @var array
     */

     protected $middleware = [
        \App\Http\Middleware\CorsMiddleware::class, // Add custom CORS middleware here
        // Other middleware...
    ];
    

    protected $middlewareGroups = [
        'web' => [
            \Illuminate\Http\Middleware\EncryptCookies::class,
            \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
            \Illuminate\Session\Middleware\StartSession::class,
            // Other middleware specific to web routes...
        ],
    
        'api' => [
            \Illuminate\Routing\Middleware\ThrottleRequests::class,
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
            \App\Http\Middleware\CorsMiddleware::class, // Add CORS middleware here
            // Other middleware specific to API routes...
        ],
    ];
    


    

    // Other middleware groups and definitions...

  
}


