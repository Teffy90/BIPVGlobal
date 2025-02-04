<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Método para mostrar el formulario de login
    |--------------------------------------------------------------------------
    */
    public function showLoginForm()
    {
        return view('auth.login'); // Asegúrate de tener la vista auth/login.blade.php
    }

    /*
    |--------------------------------------------------------------------------
    | Método para procesar el login
    |--------------------------------------------------------------------------
    */
    public function login(Request $request)
    {
        // Validar los datos del formulario
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        // Intentar autenticar al usuario
        if (Auth::attempt($request->only('email', 'password'), $request->filled('remember'))) {
            // Regenerar la sesión para prevenir ataques de fijación de sesión
            $request->session()->regenerate();

            // Redirigir al dashboard o página de inicio
            return redirect()->intended('/home');
        }

        // Si la autenticación falla, lanzar una excepción de validación
        throw ValidationException::withMessages([
            'email' => __('auth.failed'), // Mensaje de error personalizado
        ]);
    }

    /*
    |--------------------------------------------------------------------------
    | Método para cerrar sesión
    |--------------------------------------------------------------------------
    */
    public function logout(Request $request)
    {
        // Cerrar la sesión del usuario
        Auth::logout();

        // Invalidar la sesión actual
        $request->session()->invalidate();

        // Regenerar el token de la sesión
        $request->session()->regenerateToken();

        // Redirigir a la página de inicio
        return redirect('/');
    }

    /*
    |--------------------------------------------------------------------------
    | Método para redirigir después del login
    |--------------------------------------------------------------------------
    */
    protected function redirectTo()
    {
        return '/home'; // Cambia esto según tu ruta de redirección
    }

}
Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout'])->name('logout');