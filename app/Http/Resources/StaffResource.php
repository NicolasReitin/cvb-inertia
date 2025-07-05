<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StaffResource extends JsonResource
{
    /**
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'licence' => $this->licence,
            'last_name' => $this->last_name,
            'first_name' => $this->first_name,
            'email' => $this->email,
            'role' => $this->role,
            'phone' => $this->phone,
            'photo' => $this->photo,
            'team_id' => $this->team_id,
            'created_at' => $this->created_at,
        ];   
    }
}
