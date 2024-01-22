// WeatherChart.js
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import CityDetails from './CityDetails';

const WeatherChart = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [selectedCity, setSelectedCity] = useState('Prishtina');
    const [visibility, setVisibility] = useState(null);
    const [weatherIcon, setWeatherIcon] = useState(null);
    const [weatherDescription, setWeatherDescription] = useState(null);
    const [Temp, setTemp] = useState(null);



    const cityDescriptions = {
        Prishtina: "Prishtina, the capital city of Kosovo, experiences a continental climate with cold winters and warm summers. Winters bring snowfall, creating a picturesque landscape, while summers are characterized by pleasantly warm temperatures. Spring and autumn transition periods offer milder conditions, making it an ideal time to explore the city.",
        Prizren: "Nestled amid scenic landscapes, Prizren enjoys a similar continental climate. Winters are cold, accompanied by snowfall, enhancing the city's charm. Summers are warm, encouraging outdoor activities along the Bistrica River. Prizren's weather, with distinct seasons, contributes to a rich cultural and historical experience.",
        Mitrovica: "Mitrovica, situated in the northern part of Kosovo, shares the continental climate of the region. Winters are cold, with occasional snow, and summers are warm, inviting residents and visitors to enjoy outdoor events. Mitrovica's climate contributes to the diverse cultural and historical heritage of the city.",
        Ferizaj: "Ferizaj experiences a continental climate with cold winters and warm summers. Snowfall is common in winter, creating a serene atmosphere. Summers are characterized by comfortable temperatures, making it a favorable time for outdoor activities. Ferizaj's climate, coupled with its historical sites, provides a well-rounded experience.",
        Peje: "Located in the western part of Kosovo, Peje has a continental climate with cold winters and warm summers. Snowfall is common during winter, transforming the city into a winter wonderland. The summer months offer pleasant temperatures, encouraging exploration of the city's natural beauty, including the nearby Rugova Gorge."
    };

    useEffect(() => {
        // Fetch weather data from Laravel backend with the selected city
        axios.get(`http://localhost:8000/api/weather?city=${selectedCity}`)
            .then(response => {
                setWeatherData(response.data);
                setVisibility(response.data.visibility);
                setTemp((response.data.weatherData.list[0].main.temp - 273.15).toFixed(1))

                // Extract icon and description from the first item in the list array
                const { icon, description } = response.data.weatherData.list[0].weather[0];
                setWeatherIcon(icon);
                setWeatherDescription(description);
            })
            .catch(error => console.error('Error fetching weather data:', error));
    }, [selectedCity]);

    // Check if weatherData is undefined or null
    if (!weatherData) {
        return <div>Loading...</div>;
    }

    // Extract temperature data from the list array
    const temperatureData = weatherData.weatherData.list.map(item => item.main.temp - 273.15);

    // Assuming temperatureData contains temperature information over time
    const chartData = {
        labels: weatherData.weatherData.list.map(item => item.dt_txt), // Use timestamps as labels
        datasets: [
            {
                label: 'Temperature',
                data: temperatureData,
                borderColor: 'rgba(0,0,255,1)',
                borderWidth: 2,
                fill: true,
            },
        ],
    };

    const cities = ['Prishtina', 'Prizren', 'Mitrovica', 'Ferizaj', 'Peje'];

    return (
        <>
          <div className='container d-flex justify-content-center align-items-center' style={{ height: '100vh', marginTop: '50px' }}>
            <div className='card m-3' style={{ width: '80%' }}>
              <h2>Weather Trends</h2>
              <label>Select City:</label>
              <select onChange={(e) => setSelectedCity(e.target.value)} value={selectedCity}>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
              <div className='container mt-3 d-flex justify-content-end align-items-end'>
                {/* Display weather icon and description */}
                {weatherIcon && (
                  <>
                    <img src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="Weather Icon" />
                    <div className="ml-2">
                      <p><b>{weatherDescription}</b></p>
                      <p><b> {Temp} °C</b></p>
                    </div>
                  </>
                )}
              </div>
              <div className='container'>
                {/* Display CityDetails component with dynamically passed props */}
                {cityDescriptions[selectedCity] && (
                  <CityDetails cityName={selectedCity} weatherDescription={cityDescriptions[selectedCity]} />
                )}
                <Line data={chartData} options={{}} />
              </div>
              {visibility !== null && (
                <div className='container m-3'>
                  <div className='row'>
                    <div className='col-sm-6'>
                      <h3>Visibility Grade for Driving:</h3>
                      {visibility >= 10000 ? (
                        <>
                          <i className="fa-solid fa-eye green" style={{ fontSize: '2em', marginRight: '10px' }}></i>
                          <p className="excellent"> {visibility}M Excellent</p>
                        </>
                      ) : visibility >= 5000 ? (
                        <>
                          <i className="fa-solid fa-eye good" style={{ fontSize: '2em', marginRight: '10px' }}></i>
                          <p className="good"> {visibility}M Good</p>
                        </>
                      ) : visibility >= 2000 ? (
                        <>
                          <i className="fa-solid fa-eye fair" style={{ fontSize: '2em', marginRight: '10px' }}></i>
                          <p className="fair"> {visibility}M Fair</p>
                        </>
                      ) : (
                        <>
                          <i className="fa-solid fa-eye poor" style={{ fontSize: '2em', marginRight: '10px' }}></i>
                          <p className="poor"> {visibility}M Poor</p>
                        </>
                      )}
                    </div>
                    {weatherData.weatherData.list && weatherData.weatherData.list.length > 0 && (
                      <div className='col-sm-6'>
                        <h4>Wind Information:</h4>
                        <i className="fa-solid fa-wind" style={{ fontSize: '2em', marginRight: '10px' }}></i>
                        <b><p>Speed: {weatherData.weatherData.list[0].wind.speed} m/s</p></b>
                        <b><p>Degree: {weatherData.weatherData.list[0].wind.deg}&deg;</p></b>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      );
    };

export default WeatherChart;
