import React, { useState } from 'react';
import axios from 'axios';
import MyComponent from './components/MyComponent';  // Import the MyComponent
import UploadResume from './components/UploadResume';  // Import the UploadResume component

const App = () => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert('Please select a file');

    const formData = new FormData();
    formData.append('resume', file);

    try {
      const res = await axios.post('http://localhost:5000/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setResponse(res.data);
    } catch (err) {
      console.error('Upload failed:', err);
      alert('Upload failed');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to My App</h1>
      <MyComponent />  {/* MyComponent rendering */}
      
      <h1>Resume Upload</h1>
      <UploadResume />  {/* UploadResume rendering */}

      {response && (
        <div style={{ marginTop: '1rem' }}>
          <strong>Server Response:</strong>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
