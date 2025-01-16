<?php

namespace App\Http\Controllers;

use App\Services\CostCategoryService;
use App\Services\CostService;
use Inertia\Inertia;
use Inertia\Response;

class LedgerController
{
    protected CostService $costService;

    protected CostCategoryService $costCategoryService;

    public function __construct(CostService $costService, CostCategoryService $costCategoryService)
    {
        $this->costService = $costService;
        $this->costCategoryService = $costCategoryService;
    }

    public function index(): Response
    {
        $costs = $this->costService->getCosts();
        $categories = $this->costCategoryService->getCategories();

        return Inertia::render('Ledger', [
            'costs' => $costs,
            'categories' => $categories,
        ]);
    }
}
