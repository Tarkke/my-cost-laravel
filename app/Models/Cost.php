<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Cost extends Model
{
    protected $fillable = [
        'type',
        'category_id',
        'amount',
        'time',
        'remark',
    ];

    protected $hidden = [
        'category_id',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(CostCategory::class);
    }
}
