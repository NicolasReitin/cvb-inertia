<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePlayerRequest extends FormRequest
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
            'licence' => 'nullable|string|max:15',
            'genre' => 'required|string|max:2',
            'last_name' => 'required|string|max:55',
            'first_name' => 'required|string|max:55',
            'birthday' => 'nullable|date',
            'email' => 'nullable|string|max:100',
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
            'genre.required' => __('player.genre_required'),
            'last_name.required' => __('player.last_name_required'),
            'first_name.required' => __('player.first_name_required'),
        ];
    }
}
