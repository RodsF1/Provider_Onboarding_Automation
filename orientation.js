

import React, { useState } from 'react';
import axios from 'axios';

function Orientation() {
  const [providerInfo, setProviderInfo] = useState('');
  const [orientationProgram, setOrientationProgram] = useState('');

  const handleChange = (e) => {
    setProviderInfo(e.target.value);
  };

  const handleGenerateProgram = async () => {
    const response = await axios.post('/orientation', { provider_info: providerInfo });
    setOrientationProgram(response.data.orientation_program);
  };

  return (
    <div>
      <h1>Orientation</h1>
      <textarea onChange={handleChange} placeholder="Enter provider information" />
      <button onClick={handleGenerateProgram}>Generate Program</button>
      <div>
        <h2>Orientation Program:</h2>
        <pre>{orientationProgram}</pre>
      </div>
    </div>
  );
}

export default Orientation;


