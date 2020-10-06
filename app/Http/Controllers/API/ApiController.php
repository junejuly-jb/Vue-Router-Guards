<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Notes;

class ApiController extends Controller
{

    public function getAllUsers(){
        $user = User::all();

        return response()->json([
            'data' => $user
        ]);
    }
    public function login(Request $request){
        $pass_phrase = "VirginiaFoodsIncorporated";

        if(auth()->attempt($request->all())){
            $token = auth()->user()->createToken($pass_phrase);
            $usertype = auth()->user()->usertype;

            return response()->json([
                'message' => 'User logged in!',
                'token' => $token,
                'usertype' => $usertype,
                'user' => auth()->user()
            ]);
        }
        else{
            return response()->json([
                'message' => 'fail'
            ]);
        }
    }
    public function register(Request $request){
        
        $this->validate($request, [
            'name' => 'required|min:3',
            'email' => 'required',
            'password' => 'required',
        ]);

        $user = new User([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        $user->save();

        return response()->json([
            'message' => 'User created',
            'data' => $user
        ]);
    }

    public function addNote(Request $request){
        $note = new Notes([
            'title' => $request->title,
            'description' => $request->description
        ]);
        $note->save();
    }

    public function profile(){
        $user = auth()->user();

        return response()->json([
            'data' => $user
        ]);
    }
}
