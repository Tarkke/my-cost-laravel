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
            'type' => 'required|in:1,2,3',
            'category_id' => 'required|exists:cost_categories,id',
            'amount' => 'required|numeric',
            'time' => 'required|date_format:Y-m-d H:i',
            'remark' => 'nullable|string',
        ]);

        $this->costService->createCost($request->only('type', 'category_id', 'amount', 'time', 'remark'));

        to_route('ledgers');
    }

    public function update(Request $request, string $id): void
    {
        $request->validate([
            'type' => 'nullable|in:1,2,3',
            'category_id' => 'required|exists:cost_categories,id',
            'amount' => 'nullable|numeric',
            'time' => 'nullable|date_format:Y-m-d H:i',
            'remark' => 'nullable|string',
        ]);

        $this->costService->updateCost($id, $request->only('type', 'category_id', 'amount', 'time', 'remark'));

        to_route('ledgers');
    }

    public function remove(string $id): void
    {
        $this->costService->removeCost($id);

        to_route('ledgers');
    }
}
