<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class PvWattsController extends Controller
{
    /**
     * Obtiene los datos de PVWatts.
     *
     * @param  float  $systemCapacity
     * @param  float  $lat
     * @param  float  $lon
     * @return array
     */
    public function getPvWattsData(float $systemCapacity, float $lat, float $lon): array
    {
        $client = new Client();

        $api_url = "https://developer.nrel.gov/api/pvwatts/v8.json";
        $params = [
            "api_key" => "UXkJ5k1YBXhZXCvRClrUymUYriw9vyEhFBbyAHjM",  
            "system_capacity" => $systemCapacity, // Capacidad del sistema en kW
            "module_type" => 0,                 // Tipo de módulo (0 = estándar)
            "losses" => 14,                     // Pérdidas del sistema (%)
            "array_type" => 1,                  // Tipo de arreglo (1 = techo fijo)
            "tilt" => 10,                       // Ángulo de inclinación (grados)
            "azimuth" => 180,                   // Ángulo de azimut (grados)
            "lat" => $lat,
            "lon" => $lon
        ];

        try {
            $response = $client->get($api_url, ['query' => $params]);

            if ($response->getStatusCode() == 200) {
                $data = json_decode($response->getBody(), true);

                // Procesar los resultados
                $annualProduction = $data['outputs']['ac_annual'];
                $annualRadiation = $data['outputs']['solrad_annual'];

                return [
                    'annual_production_kwh' => $annualProduction,
                    'annual_radiation_kwh_per_m2_day' => $annualRadiation
                ];
            } else {
                throw new \Exception('Error en la solicitud a la API');
            }
        } catch (\Exception $e) {
            throw new \Exception($e->getMessage());
        }
    }
}