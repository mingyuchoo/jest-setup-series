import React, { ReactElement } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const LocationDisplay = (): ReactElement => {
  const history = useHistory();
  const location = useLocation();

  const goHome = () => {
    history.push('/');
  };
  return (
    <div data-testid="location-display">
      {location.pathname}
      <button onClick={goHome}>go home</button>
    </div>
  );
};

export default LocationDisplay;
