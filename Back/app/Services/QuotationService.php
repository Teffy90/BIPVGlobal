<?php

namespace App\Services;

use App\Models\Project;
use App\Models\MaterialProperty;

class QuotationService
{
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

        // Calcular los campos adicionales
        $efficiency = $this->calculateEfficiency($systemCapacity, $project);
        $projectCost = $this->calculateProjectCost($totalCost, $project);
        $annualSavings = $this->calculateAnnualSavings($systemCapacity, $project);
        $monthlySavings = $this->calculateMonthlySavings($annualSavings);
        $investmentReturn = $this->calculateInvestmentReturn($projectCost, $annualSavings);
        $numberOfRoofs = $this->calculateNumberOfRoofs($systemCapacity, $project);
        $numberOfFacades = $this->calculateNumberOfFacades($systemCapacity, $project);
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
            'number_of_roofs' => $numberOfRoofs,
            'number_of_facades' => $numberOfFacades,
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
        // Lógica personalizada según propiedades del proyecto
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
        // Fórmula de ejemplo: Costo total + costos adicionales del proyecto
        return $totalCost + $project->project_cost;
    }

    /**
     * Calcula la energía generada al año.
     *
     * @param  float  $systemCapacity
     * @param  Project  $project
     * @return float
     */
    private function calculateAnnualSavings(float $systemCapacity, Project $project): float
    {
        // Fórmula de ejemplo: Energía anual = Capacidad del sistema * Horas de sol al día * 365
        return $systemCapacity * $project->sun_hours_per_day * 365;
    }

    /**
     * Calcula la energía generada al mes.
     *
     * @param  float  $annualSavings
     * @return float
     */
    private function calculateMonthlySavings(float $annualSavings): float
    {
        // Fórmula de ejemplo: Energía mensual = Energía anual / 12
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
        // Fórmula de ejemplo: ROI = (Ahorro anual / Costo del proyecto) * 100
        return ($annualSavings / $projectCost) * 100;
    }

    /**
     * Calcula el número de techos necesarios.
     *
     * @param  float  $systemCapacity
     * @param  Project  $project
     * @return int
     */
    private function calculateNumberOfRoofs(float $systemCapacity, Project $project): int
    {
        // Fórmula de ejemplo: Número de techos = Capacidad del sistema / Capacidad por techo
        return (int) ceil($systemCapacity / $project->roof_capacity);
    }

    /**
     * Calcula el número de fachadas necesarias.
     *
     * @param  float  $systemCapacity
     * @param  Project  $project
     * @return int
     */
    private function calculateNumberOfFacades(float $systemCapacity, Project $project): int
    {
        // Fórmula de ejemplo: Número de fachadas = Capacidad del sistema / Capacidad por fachada
        return (int) ceil($systemCapacity / $project->facade_capacity);
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
        // Fórmula de ejemplo: Rentabilidad anual = (Ahorro anual / Costo del proyecto) * 100
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
        // Fórmula de ejemplo: Rentabilidad mensual = Rentabilidad anual / 12
        return $annualProfitability / 12;
    }
}