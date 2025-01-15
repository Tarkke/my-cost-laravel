<?php

namespace App\Services;

use App\Models\Cost;
use Illuminate\Database\Eloquent\Collection;

class CostService
{
    public function getCosts(): Collection
    {
        return Cost::all();
    }

    public function createCost($data): bool
    {
        $cost = new Cost($data);

        return $cost->save();
    }

    public function updateCost($id, $data): bool
    {
        /** @var Cost|null $cost */
        $cost = Cost::find($id);

        if ($cost) {
            return $cost->update($data);
        }

        return false;
    }

    public function removeCost($id): bool
    {
        /** @var Cost|null $cost */
        $cost = Cost::find($id);

        if ($cost) {
            return $cost->delete();
        }

        return false;
    }
}
