

import React, { useState } from 'react';
import axios from 'axios';

function Performance() {
  const [providerId, setProviderId] = useState('');
  const [performanceData, setPerformanceData] = useState('');

  const handleChange = (e) => {
    setProviderId(e.target.value);
  };

  const handleMonitorPerformance = async () => {
    const response = await axios.post('/monitor_performance', { provider_id: providerId });
    setPerformanceData(response.data.performance_data);
  };

  return
}

