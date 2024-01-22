<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class WeatherController extends Controller
{
    public function index(Request $request)
    {
        $city = $request->input('city', 'Prishtina'); // Default to Prishtina if no city is provided
        $apiKey = config('services.openweathermap.api_key');

        $cityCoordinates = $this->getCityCoordinates($city);

        $response = Http::get("http://api.openweathermap.org/data/2.5/forecast?lat={$cityCoordinates['lat']}&lon={$cityCoordinates['lon']}&appid=$apiKey");
        $weatherData = $response->json();
        $visibility = $weatherData['list'][0]['visibility'];

        return response()->json(['weatherData' => $weatherData, 'visibility' => $visibility]);
    }

    private function getCityCoordinates($city)
    {
        // Add more cities and their coordinates as needed
        $cityCoordinates = [
            'Prishtina' => ['lat' => 42.6629, 'lon' => 21.1655],
            'Prizren' => ['lat' => 42.2139, 'lon' => 20.7417],
            'Mitrovica' => ['lat' => 42.8833, 'lon' => 20.8667],
            'Ferizaj' => ['lat' => 42.3709, 'lon' => 21.1557],
            'Peje' => ['lat' => 42.6609, 'lon' => 20.2925],
        ];

        return $cityCoordinates[$city] ?? ['lat' => 0, 'lon' => 0]; // Default to (0, 0) if city not found
    }
}
