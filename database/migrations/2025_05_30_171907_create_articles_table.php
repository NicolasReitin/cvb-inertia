<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255);
            $table->string('size', 20)->nullable();
            $table->decimal('price', 8, 2);
            $table->string('photo');
            $table->timestamps();
            $table->softDeletes(); 
        });
    }


    public function down(): void
    {
        Schema::dropIfExists('articles');
    }
};