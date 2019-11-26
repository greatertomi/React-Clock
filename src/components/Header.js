import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

import './Header.css';

const Header = () => (
  <div className='header'>
    <FontAwesomeIcon icon={faClock} size='4x' color='white' />
    <h2>React Clock</h2>
  </div>
);

export default Header;
