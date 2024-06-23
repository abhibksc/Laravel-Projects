<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB; // Add this to use the query builder

class UserController extends Controller
{
    
    public function RegisterNewUser(Request $request) 
    {
        // Validate the request data
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

       $inertedId =   DB::table('users')->insertGetId([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']), 
            // 'created_at' => now(),
            // 'updated_at' => now(),
        ]);

        $user = DB::table('users')->where('id', $inertedId)->first();

        return response()->json(['user' => ['userId' => $user->id, 'UserName' => $user->name , 'UserEmail' => $user->email]], 201);
    }

   
    public function LoginUser(Request $request) 
    {
        
        $data = $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string|min:6',
        ]);

           $user = DB::table('users')->where('email', $data['email'])->first();


        if (!$user || !Hash::check($data['password'], $user->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }


        return response()->json(['user' => ['userId' => $user->id, 'UserName' => $user->name , 'UserEmail' => $user->email]], 200);

    }
}

