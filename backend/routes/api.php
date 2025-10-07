<?php

use App\Http\Controllers\UserRegController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('register', [UserRegController::class, 'register']);

Route::post('login', [UserRegController::class, 'login']);