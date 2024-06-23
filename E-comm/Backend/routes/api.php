<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SongsController;
use App\Http\Controllers\EventController;




// routes/api.php

Route::post('/login', [UserController::class, 'LoginUser'])->name('login');
Route::post('/register', [UserController::class, 'RegisterNewUser'])->name('register');



Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    })->name('user');
});

Route::get('/storeData', [SongsController::class, 'index']);
Route::post('/postSong', [SongsController::class, 'store'])->name('postSong');

Route::post('/bookevent', [EventController::class, 'event']);
Route::get('/allevents', [EventController::class, 'index']);








