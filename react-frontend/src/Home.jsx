import React from 'react';
import { Link } from 'react-router-dom';
import Image from "./assets/123.jpg"

const Home = () => {
  return (
    <>
    <div className='bg-dark'>

   {/* Welcome section */}
   <div className="bg-image" style={{ height: '70vh', backgroundSize: 'cover', position: 'relative' }}>
        <img src={Image} alt="Welcome Image" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
        <div className="card-body text-white d-flex flex-column align-items-center justify-content-center" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
          <h5 className="card-title">Welcome to KS Drive</h5>
          <p className="card-text" style={{ fontSize: '2em' }}>
            Your go-to resource for safe driving with real-time weather information across Kosovo.
          </p>
          <Link to="/cities" className="mt-3">
            <button className="btn btn-primary">Check Weather</button>
          </Link>
        </div>
      </div>
    <div className="container mt-4">

      {/* Other Cards */}
      <div className="row row-cols-1 row-cols-md-3 g-4 p-5">
        {/* Weather Awareness Card */}
        <div className="col">
          <div className="card">
            <div className="card-body">
            <i className="fa-solid fa-bolt" style={{ fontSize: '3em', marginRight: '10px', marginBottom: '10px' }}></i>
              <h5 className="card-title">Weather Awareness</h5>
              <p className="card-text">
                Stay Informed: Receive up-to-date weather data for cities across Kosovo.
             
                Safety First: Drive confidently with insights into temperature, visibility, and wind conditions.
              </p>
            </div>
          </div>
        </div>

        {/* City-Specific Details Card */}
        <div className="col">
          <div className="card">
            <div className="card-body">
            <i className="fa-solid fa-city" style={{ fontSize: '3em', marginRight: '10px', marginBottom: '10px' }}></i>
              <h5 className="card-title">City-Specific Details</h5>
              <p className="card-text">
                City Insights: Explore detailed weather information for specific cities.
           
                Tailored Recommendations: Get personalized safety recommendations based on weather conditions.
              </p>
            </div>
          </div>
        </div>

        {/* Safety Tips Card */}
        <div className="col">
          <div className="card">
            <div className="card-body">
            <i className="fa-solid fa-snowflake" style={{ fontSize: '3em', marginRight: '10px', marginBottom: '10px' }}></i>
              <h5 className="card-title">Safety Tips</h5>
              <p className="card-text">
                Guidance for Safe Driving: Access tips on navigating different weather scenarios.
             
                Be Prepared: Equip yourself with knowledge to handle challenging driving conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Home;
