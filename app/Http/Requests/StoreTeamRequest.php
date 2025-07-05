<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTeamRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

   /**
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            
            'name' => 'required|string|max:55',
            'category' => 'nullable|string|in:senior, young',
            'role' => 'nullable|string|in:male, female, mixed',
            'division' => 'nullable|string|max:55',
            'photo' => 'nullable|string',
        ];
    }

    /**
     * @return array
     */
    public function messages()
    {
        return [
            'name.required' => __('team.name_required'),
            'category.required' => __('team.category_required'),
            'sex.required' => __('team.sex_required'),
        ];
    }
}
