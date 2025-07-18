<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('partners', function (Blueprint $table) {
            $table->id();
            $table->string('name', 55);
            $table->string('url', 255)->nullable();
            $table->string('logo')->nullable();
            $table->enum('role', ['institutional partner', 'private partner', 'helped us'])->nullable();
            $table->timestamps();
            $table->softDeletes(); 
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('partners');
    }
};