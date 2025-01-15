<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cost extends Model
{
    protected $fillable = [
        'type',
        'amount',
        'time',
        'remark',
    ];
}
