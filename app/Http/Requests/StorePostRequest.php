<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePostRequest extends FormRequest
{
    public function authorize(): bool
    {
        return false;
    }

    /**
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules()
    {
        return [
            'title' => 'required|string|max:255',
            'content' => 'nullable|string',
            'author' => 'required|string|max:50',
            'photo' => 'nullable|string',
            'team_id' => 'nullable|exists:team,id',
        ];
    }

    /**
     * @return array
     */
    public function messages()
    {
        return [
            'title.required' => __('post.title_required'),
            'author.required' => __('post.author_required'),
        ];
    }
}
