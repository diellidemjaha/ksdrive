// CityDetails.js
import React from 'react';

const CityDetails = ({ cityName, weatherDescription }) => {
  return (
    <div>
      <h2>{cityName}</h2>
      <p>{weatherDescription}</p>
    </div>
  );
};

export default CityDetails;
