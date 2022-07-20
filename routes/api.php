<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ListadosPreliminaresController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Broadcast::routes(['middleware' => ['auth:sanctum']]);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post("register",[AuthController::class,'register']);
Route::post("login",[AuthController::class,'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post("profile",[AuthController::class,'profile']);
    Route::post("logout",[AuthController::class,'logout']);
    Route::post("/listados-preliminares/create",[ListadosPreliminaresController::class,'create']);
    Route::put("/listados-preliminares/update",[ListadosPreliminaresController::class,'update']);
    Route::post("/listados-preliminares/update",[ListadosPreliminaresController::class,'stateUpdate']);
    Route::delete("/listados-preliminares/update",[ListadosPreliminaresController::class,'cancelUpdate']);
    Route::get("/listados-preliminares/",[ListadosPreliminaresController::class,'getData']);
    Route::post("/listados-preliminares/",[ListadosPreliminaresController::class,'getRecord']);
});