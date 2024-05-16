

import React, { useState } from 'react';
import axios from 'axios';

function ITSetup() {
  const [providerInfo, setProviderInfo] = useState('');
  const [accessSetupResult, setAccessSetupResult] = useState('');

  const handleChange = (e) => {
    setProviderInfo(e.target.value);
  };

  const handleSetupAccess = async () => {
    const response = await axios.post('/setup_it_access', { provider_info: providerInfo });
    setAccessSetupResult(response.data.access_setup_result);
  };

  return (
    <div>
      <h1>IT and Systems Integration</h1>
      <textarea onChange={handleChange} placeholder="Enter provider information" />
      <button onClick={handleSetupAccess}>Setup Access</button>
      <div>
        <h2>Access Setup Result:</h2>
        <pre>{accessSetupResult}</pre>
      </div>
    </div>
  );
}

export default ITSetup;


