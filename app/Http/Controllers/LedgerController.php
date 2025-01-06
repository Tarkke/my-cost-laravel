<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class LedgerController
{
    public function index(): Response
    {
        return Inertia::render('Ledger');
    }
}
