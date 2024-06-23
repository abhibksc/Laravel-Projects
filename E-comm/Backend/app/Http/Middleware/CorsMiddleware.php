<?php

namespace App\Http\Middleware;

use Closure;

class CorsMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $response = $next($request);

        // Allow from any origin
        $response->header('Access-Control-Allow-Origin', '*');

        // Allow specific headers
        $response->header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');

        // Allow specific HTTP methods
        $response->header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');

        return $response;
    }
}
