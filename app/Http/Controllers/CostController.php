<?php

namespace App\Http\Controllers;

use App\Services\CostService;
use Illuminate\Http\Request;

class CostController
{
    protected CostService $costService;

    public function __construct(CostService $costService)
    {
        $this->costService = $costService;
    }

    public function create(Request $request): void
    {
        $request->validate([
            'type' => 'required|in:0,1,2',
            'amount' => 'required|numeric',
            'time' => 'required|date_format:Y-m-d H:i',
            'remark' => 'nullable|string',
        ]);

        $this->costService->createCost($request->only('type', 'amount', 'time', 'remark'));

        to_route('ledgers');
    }

    public function update(Request $request, string $id): void
    {
        $request->validate([
            'type' => 'nullable|in:0,1,2',
            'amount' => 'nullable|numeric',
            'time' => 'nullable|date_format:Y-m-d H:i',
            'remark' => 'nullable|string',
        ]);

        $this->costService->updateCost($id, $request->only('type', 'amount', 'time', 'remark'));

        to_route('ledgers');
    }

    public function remove(string $id): void
    {
        $this->costService->removeCost($id);

        to_route('ledgers');
    }
}
