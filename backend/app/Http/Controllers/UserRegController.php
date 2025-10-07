<?php

namespace App\Http\Controllers;

use App\Mail\UserRegMail;
use Illuminate\Support\Facades\Log;
use App\Mail\AdminApprovalMail;
use Illuminate\Support\Facades\Mail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash; 
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB; // Keep if you plan to use transactions

class UserRegController extends Controller
{
    public function register(Request $request)
    {
        $validate = Validator::make($request->all(), [
            "name" => "required|string|max:120",
            "email" => "required|email|unique:users,email|max:120", 
            'phone' => 'required|string|max:15|unique:users,phone', 
            "country" => "required|string|max:120",
            "password" => "required|string|min:8|max:50",
            "additionalInfo" => "required|string|max:220",
        ]);

        if ($validate->fails()) {
            return response()->json([
                'status' => false, // Use boolean for consistency
                'error' => $validate->errors()
            ], 422);
        }

        $user = User::create([ 
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'country' => $request->country,
            'password' => Hash::make($request->password), // Hash the password!
            'additionalInfo' => $request->additionalInfo,
            'status' => 'pending', 
        ]);

        $approveUrl = url("/admin/approve/{$user->id}");
        $declineUrl = url("/admin/decline/{$user->id}");

        try {
            Mail::to($user->email)->send(new UserRegMail($user));
            Mail::to("awobonayetunde4@gmail.com")->send(new AdminApprovalMail($user, $approveUrl, $declineUrl));
        } catch (\Exception $e) {
            Log::error('Mail sending failed: ' . $e->getMessage());
            
        }

        return response()->json([
            'status' => 'success',
            'user' => $user, // Now defined and will include the full user object (with hashed password)
        ]);
    }

    public function login(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:8',
        ]);

        if ($validate->fails()) {
            return response()->json([
                'status' => 'error', 
                'message' => $validate->errors()
            ], 400);
        }

        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'status' => 'error', 
                'message' => 'Invalid credentials'
            ], 401);
        }

        // Get the authenticated user
        $user = Auth::user();

        // Check status: Block pending users
        if ($user->status === 'pending') {
            return response()->json([
                'status' => 'error',
                'message' => 'Application is still pending. Please wait for approval.'
            ], 403); 
        }

        // If status is 'approved' (or any other non-pending), proceed
        return response()->json([
            'status' => 'success',
            'data' => $user,
        ]);
    }
}