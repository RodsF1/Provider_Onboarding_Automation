

import React, { useState } from 'react';
import axios from 'axios';

function Credentialing() {
  const [file, setFile] = useState(null);
  const [verificationResult, setVerificationResult] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('document', file);
    
    const response = await axios.post('/verify_credentials', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    setVerificationResult(response.data.verification_result);
  };

  return (
    <div>
      <h1>Credentialing and Verification</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <div>
        <h2>Verification Result:</h2>
        <p>{verificationResult}</p>
      </div>
    </div>
  );
}

export default Credentialing;


