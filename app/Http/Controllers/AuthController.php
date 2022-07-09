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
            'id_tipo_usuario'=>'required',
            'primer_nombre'=>'required|alpha|max:50',
            'segundo_nombre'=>'alpha|max:50',
            'primer_apellido'=>'required|alpha|max:50',
            'segundo_apellido'=>'required|alpha|max:50',
            'usuario'=>['required',new ValidateUserRegex(),'unique:usuario,USUARIO'],
            'correo'=>'required|email|unique:usuario,CORREO|max:100',
            'clave'=>['required',new ValidatePasswordRegex()],
            'confirmar_clave'=>['required',new ConfirmPassword($request->input('clave'))]
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json([
                'state' => false,
                'errors' => $validator->errors()
            ]);
        }
        $dataForm = $request->all();
        $dataForm['clave'] = Hash::make($dataForm['clave']);
        unset($dataForm['confirmar_clave']);
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
        $user = User::where('correo','=',$request->correo)->first();
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
