<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\API\AuthController;

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
    // Route::post('/login', 'login')->middleware('verifyEmail');
    Route::post('/login', 'login');
    Route::post('/register', 'register');
    Route::post('/registerOrLoginGoogle', 'registerOrLoginGoogle');
    Route::post('/verification', 'verification');
});

Route::controller(UserController::class)->group(function () {
    Route::patch('/users/{id}/update', 'update');
    Route::get('/users/{id}', 'view');
    Route::get('/users/groups/{groupId}', 'getGroupUsers');
    Route::get('/users/getReviews/{groupId}', 'getUserGroupReviews');
    Route::post('/users/{partnerId}/{groupId}', 'sendUserGroupReview');
    Route::post('/user/InviteUser', 'InviteUser');
});
