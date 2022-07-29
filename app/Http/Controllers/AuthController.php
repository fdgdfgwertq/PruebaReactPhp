<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Rules\ValidateUserRegex;
use App\Rules\ValidatePasswordRegex;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Rules\ConfirmPassword;

class AuthController extends Controller
{
    public function register(Request $request) {
        $out = new \Symfony\Component\Console\Output\ConsoleOutput();
        $rules = [
            'ID_TIPO_USUARIO'=>'required',
            'PRIMER_NOMBRE'=>'required|alpha|max:50',
            'SEGUNDO_NOMBRE'=>'alpha|max:50',
            'PRIMER_APELLIDO'=>'required|alpha|max:50',
            'SEGUNDO_APELLIDO'=>'required|alpha|max:50',
            'USUARIO'=>['required',new ValidateUserRegex(),'unique:usuario,USUARIO'],
            'CORREO'=>'required|email|unique:usuario,CORREO|max:100',
            'CLAVE'=>['required',new ValidatePasswordRegex()],
            'CONFIRMAR_CLAVE'=>['required',new ConfirmPassword($request->input('CLAVE'))]
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json([
                'state' => false,
                'errors' => $validator->errors()
            ]);
        }
        $dataForm = $request->all();
        $dataForm['CLAVE'] = Hash::make($dataForm['CLAVE']);
        unset($dataForm['CONFIRMAR_CLAVE']);
        User::create($dataForm);
        return response()->json([
            'state' => true
        ]);
    }

    public function login(Request $request){
        $rules = [
            'correo' => 'required|email',
            'clave' => 'required'
        ];
        $validator = Validator::make($request->all(), $rules);
        if($validator->fails()){
            return response()->json([
                'state' => false,
                'errors' => $validator->errors()
            ]);
        }
        $user = User::where('correo','=',$request->correo)->where('exists','1')->first();
        if(!isset($user)) return response()->json([
            'state' => false,
            'errors' => [
                'correo' => ['El usuario no existe']
            ]
        ]);
        if(!Hash::check($request->clave,$user->CLAVE)) return response()->json([
            'state' => false,
            'errors' => [
                'clave' => ['La clave es incorrecta']
            ]
        ]);
        $token = $user->createToken('auth_token')->plainTextToken;
        $role = $user->ID_TIPO_USUARIO;
        return response()->json([
            'state' => true,
            'accecs_token' => $token,
            'user_role' => $role
        ]);
    }

    public function profile () {
        return [
            'state' => true,
            'data' => Auth::user()
        ];
    }

    public function logout () {
        Auth::user()->tokens()->delete();
        return response()->json([
            'state' => true,
            'message' => ['Cerro sesion correctamente']
        ]); 
    }
}
