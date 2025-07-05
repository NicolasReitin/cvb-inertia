<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PlayerResource extends JsonResource
{
    /**
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'licence' => $this->licence,
            'genre' => $this->genre,
            'last_name' => $this->last_name,
            'first_name' => $this->first_name,
            'birthday' => $this->birthday,
            'email' => $this->email,
            'phone' => $this->phone,
            'photo' => $this->photo,
            'createdAt' => $this->created_at,
        ];
    }
}