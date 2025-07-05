<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Staff extends Model
{
    /** @use HasFactory<\Database\Factories\StaffFactory> */
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'licence',
        'last_name',
        'first_name',
        'email',
        'role',
        'phone',
        'photo',
    ];

    //n-n avec equipeJunior
    public function teams() 
    {
        return $this->belongsToMany(Team::class);
    }
}
