<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePartnerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:55',
            'url' => 'nullable|string|max:255',
            'logo' => 'nullable|string',
            'role' => 'nullable|string|in:institutional partner,private partner,helped us',
        ];
    }

    /**
     * @return array
     */
    public function messages()
    {
        return [
            'name.required' => __('partner.name_required'),
        ];
    }
}