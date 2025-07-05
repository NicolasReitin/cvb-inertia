<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Player extends Model
{
    /** @use HasFactory<\Database\Factories\PlayerFactory> */
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'licence',
        'genre',
        'last_name',
        'first_name',
        'birthday',
        'email',
        'phone',
        'photo',
    ];

    //n-n avec equipe
    public function teams() { 
        return $this->belongsToMany(Team::class);
    }
}
