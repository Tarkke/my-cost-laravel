<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class CostCategory extends Model
{
    protected $fillable = [
        'type',
        'name',
        'parent_id',
    ];

    protected $hidden = [
        'parent_id',
    ];

    public function parent(): BelongsTo
    {
        return $this->belongsTo(CostCategory::class);
    }

    public function children(): HasMany
    {
        return $this->hasMany(CostCategory::class, 'parent_id');
    }
}
