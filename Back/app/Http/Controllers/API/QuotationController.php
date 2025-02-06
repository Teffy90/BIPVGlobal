<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Services\QuotationService;
use Illuminate\Http\Request;

class QuotationController extends Controller
{
    protected $quotationService;

    public function __construct(QuotationService $quotationService)
    {
        $this->quotationService = $quotationService;
    }

    /**
     * Calcula una cotización.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function calculate(Request $request)
    {
        // Validar los datos de entrada
        $validatedData = $request->validate([
            'project_id' => 'required|exists:projects,id',
            'materials' => 'required|array',
            'materials.*.id' => 'required|exists:material_properties,id',
            'materials.*.quantity' => 'required|integer|min:1',
        ]);

        // Calcular la cotización
        $quotation = $this->quotationService->calculateQuotation($validatedData);

        return response()->json($quotation);
    }
}