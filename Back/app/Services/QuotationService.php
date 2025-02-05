<?php

namespace App\Services;

use App\Models\Project;
use App\Models\MaterialProperty;

class QuotationService
{
    public function calculateQuotation(array $data): array
    {
        $project = Project::findOrFail($data['project_id']);
        $totalCost = 0;
        $systemCapacity = 0;
        $materialsData = [];

        foreach ($data['materials'] as $material) {
            $dbMaterial = MaterialProperty::find($material['id']);
            
            $materialsData[] = [
                'material' => $dbMaterial,
                'quantity' => $material['quantity']
            ];

            $totalCost += $dbMaterial->cost * $material['quantity'];
            $systemCapacity += $dbMaterial->efficiency * $material['quantity'];
        }

        return [
            'project' => $project,
            'total_cost' => $totalCost + $project->project_cost,
            'system_capacity' => $systemCapacity,
            'efficiency' => $this->calculateEfficiency($systemCapacity, $project),
            'materials' => $materialsData
        ];
    }

    private function calculateEfficiency(float $systemCapacity, Project $project): float
    {
        // Lógica personalizada según propiedades del proyecto
        $baseEfficiency = $systemCapacity * 0.85; // Ejemplo básico
        return $baseEfficiency * (1 + ($project->efficiency / 100));
    }
}