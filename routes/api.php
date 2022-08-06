<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ListadosPreliminaresController;
use App\Http\Controllers\PatrimoniosClasificacionController;
use App\Http\Controllers\UpdateController;

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
    Route::delete("cancel-update",[UpdateController::class,'cancelUpdate']);

    Route::post("/listados-preliminares/create",[ListadosPreliminaresController::class,'create']);
    Route::put("/listados-preliminares/update",[ListadosPreliminaresController::class,'update']);
    Route::post("/listados-preliminares/update",[ListadosPreliminaresController::class,'infoUpdate']);
    Route::delete("/listados-preliminares/delete",[ListadosPreliminaresController::class,'delete']);
    Route::post("/listados-preliminares-get/",[ListadosPreliminaresController::class,'getData']);
    Route::post("/listados-preliminares/",[ListadosPreliminaresController::class,'getRecord']);

    Route::post("/clasificacion-recursos-atractivos/sinclas-get",[PatrimoniosClasificacionController::class,'getDataSin']);
    Route::post("/clasificacion-recursos-atractivos/sinclas",[PatrimoniosClasificacionController::class,'getRecordSin']);
    Route::post("/clasificacion-recursos-atractivos/clas-get",[PatrimoniosClasificacionController::class,'getDataCon']);
    Route::post("/clasificacion-recursos-atractivos/clas",[PatrimoniosClasificacionController::class,'getRecordCon']);
    Route::put("/clasificacion-recursos-atractivos/create",[ListadosPreliminaresController::class,'clasificacion']);
});