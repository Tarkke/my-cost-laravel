<?php

namespace App\Services;

use App\Models\CostCategory;
use Illuminate\Database\Eloquent\Collection;

class CostCategoryService
{
    public function getCategories(): Collection
    {
        return CostCategory::with('children')->where('parent_id', 0)->get();
    }
}
