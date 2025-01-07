<?php

namespace App\Http\Controllers;

use App\Services\CostService;
use Inertia\Inertia;
use Inertia\Response;

class LedgerController
{
    protected CostService $costService;

    public function __construct(CostService $costService)
    {
        $this->costService = $costService;
    }

    public function index(): Response
    {
        $costs = $this->costService->getCosts();

        return Inertia::render('Ledger', [
            'costs' => $costs,
        ]);
    }
}
