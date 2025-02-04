<?php
namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\QuotationService;

class QuotationController extends Controller
{
    protected $quotationService;

    public function __construct(QuotationService $quotationService)
    {
        $this->quotationService = $quotationService;
    }

    public function calculate(Request $request)
    {
        $validated = $request->validate([
            'project_id' => 'required|exists:projects,project_id',
            'materials' => 'required|array',
            'materials.*.id' => 'required|exists:material_properties,id_material',
            'materials.*.quantity' => 'required|integer|min:1'
        ]);

        $result = $this->quotationService->calculateQuotation($validated);
        
        return response()->json($result);
    }
}