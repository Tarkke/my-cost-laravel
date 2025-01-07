<?php

namespace App\Services;

use App\Models\Cost;
use Illuminate\Database\Eloquent\Collection;

class CostService
{
    public function getCosts(): Collection
    {
        //        return Cost::all();
        // fake data
        $data = [];
        for ($i = 1; $i < 60; $i++) {
            $data[] = [
                'id' => $i,
                'type' => 0,
                'amount' => 100,
                'time' => now(),
                'remark' => 'fake data',
            ];
        }

        return new Collection($data);
    }
}
