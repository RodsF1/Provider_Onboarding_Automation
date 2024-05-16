

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/credentialing">Credentialing</Link></li>
        <li><Link to="/enrollment">Enrollment</Link></li>
        <li><Link to="/compliance">Compliance</Link></li>
        <li><Link to="/orientation">Orientation</Link></li>
        <li><Link to="/it-setup">IT Setup</Link></li>
        <li><Link to="/performance">Performance</Link></li>
        <li><Link to="/documentation">Documentation</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
