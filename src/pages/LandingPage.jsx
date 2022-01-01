/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Header from '../parts/Header';

function LandingPage(props) {
  return (
    <>
      <Header {...props} />
    </>
  );
}

export default LandingPage;
