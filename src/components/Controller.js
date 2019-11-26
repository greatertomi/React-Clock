import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

const Controller = props => (
  <div className='controller'>
    <span className='custom-control custom-switch'>
      <input
        type='checkbox'
        className='custom-control-input switch'
        id='customSwitches'
        onChange={props.toggleVisibility}
      />
      <label className='custom-control-label' htmlFor='customSwitches'>
        <FontAwesomeIcon icon={faCalendar} size='2x' color='#61daf8' />
      </label>
    </span>
  </div>
);

export default Controller;
