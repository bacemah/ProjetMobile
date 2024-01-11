<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'type',
        'shortDescription',
        'eventEndDate',
        'eventCenter',
        'latitude',
        'longitudel',
        'image',
        'ticketSalesLink',
        'isitfree',
        'eventUrl',
        'eventStartDate',
        'artist',
    ];
}
