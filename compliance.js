

import React, { useState } from 'react';
import axios from 'axios';

function Compliance() {
  const [providerId, setProviderId] = useState('');
  const [complianceStatus, setComplianceStatus] = useState('');

  const handleChange = (e) => {
    setProviderId(e.target.value);
  };

  const handleCheckCompliance = async () => {
    const response = await axios.post('/track_compliance', { provider_id: providerId });
    setComplianceStatus(response.data.compliance_status);
  };

  return (
    <div>
      <h1>Regulatory Compliance and Training</h1>
      <input type="text" onChange={handleChange} placeholder="Enter provider ID" />
      <button onClick={handleCheckCompliance}>Check Compliance</button>
      <div>
        <h2>Compliance Status:</h2>
        <p>{complianceStatus}</p>
      </div>
    </div>
  );
}

export default Compliance;


