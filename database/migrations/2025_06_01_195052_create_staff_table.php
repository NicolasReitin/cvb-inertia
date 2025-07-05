<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('staff', function (Blueprint $table) {
            $table->id();
            $table->string('licence', 15)->nullable();
            $table->string('last_name', 55);
            $table->string('first_name', 55);
            $table->string('email', 100)->nullable();
            $table->string('role')->nullable();
            $table->string('phone', 20)->nullable();
            $table->string('photo')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('staff');
    }
};