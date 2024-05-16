

import React, { useState } from 'react';
import axios from 'axios';

function Enrollment() {
  const [providerInfo, setProviderInfo] = useState('');
  const [enrollmentForm, setEnrollmentForm] = useState('');

  const handleChange = (e) => {
    setProviderInfo(e.target.value);
  };

  const handleSubmit = async () => {
    const response = await axios.post('/enroll_insurance', { provider_info: providerInfo });
    setEnrollmentForm(response.data.enrollment_form);
  };

  return (
    <div>
      <h1>Insurance and Payer Enrollment</h1>
      <textarea onChange={handleChange} placeholder="Enter provider information" />
      <button onClick={handleSubmit}>Submit</button>
      <div>
        <h2>Enrollment Form:</h2>
        <pre>{enrollmentForm}</pre>
      </div>
    </div>
  );
}

export default Enrollment;


