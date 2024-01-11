<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('type');
            $table->string('image')->nullable();
            $table->text('shortDescription');
            $table->text('eventUrl');
            $table->text('eventCenter');
            $table->string('artist');
            $table->date('eventStartDate');
            $table->date('eventEndDate');
            $table->float('latitude');
            $table->float('longitudel');
            $table->boolean('isitfree');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
