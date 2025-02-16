<?php

namespace App\Services;

use App\Models\Project;
use App\Models\MaterialProperty;
use App\Http\Controllers\PvWattsController;

class QuotationService
{
    protected $pvWattsController;

    public function __construct(PvWattsController $pvWattsController)
    {
        $this->pvWattsController = $pvWattsController;
    }

    /**
     * Calcula la cotización completa del proyecto.
     *
     * @param  array  $data
     * @return array
     */
    public function calculateQuotation(array $data): array
    {
        $project = Project::findOrFail($data['project_id']);
        $totalCost = 0;
        $systemCapacity = 0;
        $materialsData = [];

        // Calcular el costo total y la capacidad del sistema
        foreach ($data['materials'] as $material) {
            $dbMaterial = MaterialProperty::find($material['id']);
            
            $materialsData[] = [
                'material' => $dbMaterial,
                'quantity' => $material['quantity']
            ];

            $totalCost += $dbMaterial->cost * $material['quantity'];
            $systemCapacity += $dbMaterial->efficiency * $material['quantity'];
        }

        // Obtener datos de PVWatts
        try {
            $pvWattsData = $this->pvWattsController->getPvWattsData($systemCapacity, $project->lat, $project->lon);
            $annualProduction = $pvWattsData['annual_production_kwh'];
        } catch (\Exception $e) {
            throw new \Exception("Error al obtener datos de PVWatts: " . $e->getMessage());
        }

        // Calcular los campos adicionales
        $efficiency = $this->calculateEfficiency($systemCapacity, $project);
        $projectCost = $this->calculateProjectCost($totalCost, $project);
        $annualSavings = $annualProduction; // Usar la producción anual de PVWatts
        $monthlySavings = $this->calculateMonthlySavings($annualSavings);
        $investmentReturn = $this->calculateInvestmentReturn($projectCost, $annualSavings);
        $annualProfitability = $this->calculateAnnualProfitability($annualSavings, $projectCost);
        $monthlyProfitability = $this->calculateMonthlyProfitability($annualProfitability);

        return [
            'project' => $project,
            'total_cost' => $totalCost + $project->project_cost,
            'system_capacity' => $systemCapacity,
            'efficiency' => $efficiency,
            'project_cost' => $projectCost,
            'annual_savings' => $annualSavings,
            'monthly_savings' => $monthlySavings,
            'investment_return' => $investmentReturn,
            'number_of_roofs' => $data['number_of_roofs'] ?? 0,
            'number_of_facades' => $data['number_of_facades'] ?? 0,
            'annual_profitability' => $annualProfitability,
            'monthly_profitability' => $monthlyProfitability,
            'materials' => $materialsData,
        ];
    }

    /**
     * Calcula la eficiencia del sistema.
     *
     * @param  float  $systemCapacity
     * @param  Project  $project
     * @return float
     */
    private function calculateEfficiency(float $systemCapacity, Project $project): float
    {
        $baseEfficiency = $systemCapacity * 0.85; // Ejemplo básico
        return $baseEfficiency * (1 + ($project->efficiency / 100));
    }

    /**
     * Calcula el costo del proyecto.
     *
     * @param  float  $totalCost
     * @param  Project  $project
     * @return float
     */
    private function calculateProjectCost(float $totalCost, Project $project): float
    {
        return $totalCost + $project->project_cost;
    }

    /**
     * Calcula la energía generada al mes.
     *
     * @param  float  $annualSavings
     * @return float
     */
    private function calculateMonthlySavings(float $annualSavings): float
    {
        return $annualSavings / 12;
    }

    /**
     * Calcula el retorno de inversión (ROI).
     *
     * @param  float  $projectCost
     * @param  float  $annualSavings
     * @return float
     */
    private function calculateInvestmentReturn(float $projectCost, float $annualSavings): float
    {
        return ($annualSavings / $projectCost) * 100;
    }

    /**
     * Calcula la rentabilidad anual.
     *
     * @param  float  $annualSavings
     * @param  float  $projectCost
     * @return float
     */
    private function calculateAnnualProfitability(float $annualSavings, float $projectCost): float
    {
        return ($annualSavings / $projectCost) * 100;
    }

    /**
     * Calcula la rentabilidad mensual.
     *
     * @param  float  $annualProfitability
     * @return float
     */
    private function calculateMonthlyProfitability(float $annualProfitability): float
    {
        return $annualProfitability / 12;
    }
}