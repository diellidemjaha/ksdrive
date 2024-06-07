import React from 'react';
import Image from "./assets/321.jpg";

const AboutUs = () => {
  return (
    <>
    <div className="bg-image" style={{ height: '75vh', backgroundSize: 'cover', position: 'relative' }}>
        <img src={Image} alt="Welcome Image" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
        <div className="card-body text-white d-flex flex-column align-items-center justify-content-center" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
          <p className="card-text" style={{ fontSize: '2em' }}>
          Wherever you go, no matter what the weather, always bring your own sunshine.
          </p>
          <h5 className="card-title">Anthony J. D'Angelo</h5>
        </div>
        </div>
    <div className=" p-4 bg-dark text-light">
          <h5>About KS Drive</h5>
          <p style={{ width: '50%'}}>
            At KS Drive, we believe in fostering safe driving practices through informed decision-making. Our mission is to provide real-time weather data to empower drivers across Kosovo. Explore the weather dashboard, city-specific details, and safety tips to make every drive a safer journey.
          </p>
            </div>
    </>
  );
}

export default AboutUs;
