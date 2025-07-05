<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreStaffRequest extends FormRequest
{
    public function authorize(): bool
    {
        return false;
    }

    /**
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'licence' => 'nullable|string|max:15',
            'last_name' => 'required|string|max:55',
            'first_name' => 'required|string|max:55',
            'email' => 'nullable|string|max:100',
            'role' => 'nullable|string|max:55',
            'phone' => 'nullable|string|max:20',
            'photo' => 'nullable|string',
        ];
    }

    /**
     * @return array
     */
    public function messages()
    {
        return [
            'last_name.required' => __('staff.last_name_required'),
            'first_name.required' => __('staff.first_name_required'),
        ];
    }
}
