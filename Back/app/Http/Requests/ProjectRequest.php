<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProjectRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'efficiency' => 'required|numeric|min:0',
            'project_cost' => 'required|numeric|min:0',
            'system_capacity' => 'required|numeric|min:0'
        ];
    }
}