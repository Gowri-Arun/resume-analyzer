// src/components/MyComponent.js
import React, { useEffect, useState } from 'react';
import api from '../services/api';  // Import the Axios instance

const MyComponent = () => {
  const [data, setData] = useState(null);  // State to store the data from the backend
  const [error, setError] = useState(null);  // State to handle any errors

  useEffect(() => {
    // Make the API request using Axios
    api.get('/api/status')  // Adjust the endpoint as needed
      .then(response => {
        // Successfully received data from the backend
        setData(response.data);
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error('There was an error!', error);
        setError('Something went wrong');
      });
  }, []);  // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div>
      <h1>Backend Data</h1>
      {error && <p>{error}</p>}
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default MyComponent;
