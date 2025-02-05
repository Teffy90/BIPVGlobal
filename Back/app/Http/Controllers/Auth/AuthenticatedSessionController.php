<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class AuthenticatedSessionController extends Controller
{
    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request)
    {
        try {
            $request->authenticate();
            
            $user = $request->user();
            $user->updateLastLogin();
            
            $request->session()->regenerate();
            
            // Registrar en log si es necesario
            Log::info('User logged in', [
                'user_id' => $user->id,
                'email' => $user->email,
                'last_login' => $user->last_login
            ]);

            return response()->json([
                'user' => $user,
                'session' => $request->session()->getId(),
                'last_login' => $user->last_login
            ], Response::HTTP_OK);

        } catch (\Exception $e) {
            Log::error('Login error: '.$e->getMessage());
            return response()->json([
                'message' => 'Authentication failed',
                'errors' => $e->getMessage()
            ], Response::HTTP_UNAUTHORIZED);
        }
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request)
    {
        try {
            $user = $request->user();
            
            Auth::guard('web')->logout();
            $request->session()->invalidate();
            $request->session()->regenerateToken();

            // Actualizar última actividad al logout
            if($user) {
                $user->last_login = now();
                $user->save();
            }

            Log::info('User logged out', [
                'user_id' => optional($user)->id,
                'email' => optional($user)->email
            ]);

            return response()->noContent();

        } catch (\Exception $e) {
            Log::error('Logout error: '.$e->getMessage());
            return response()->json([
                'message' => 'Logout failed',
                'errors' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}