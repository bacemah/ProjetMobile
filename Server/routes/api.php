<?php

use App\Http\Controllers\API\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::controller(AuthController::class)->group(function () {
    Route::post('/reset', 'reset');
    Route::post('/verifyPassword', 'verifyPassword');
    Route::post('/resetVerification', 'sendResetVerification');
    Route::post('/login', 'login')->middleware('verifyEmail');
    Route::post('/register', 'register');
    Route::post('/registerOrLoginGoogle', 'registerOrLoginGoogle');
    Route::post('/verification', 'verification');
});
