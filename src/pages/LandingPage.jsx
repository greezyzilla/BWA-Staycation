/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Header from '../parts/Header';
import Hero from '../parts/Hero';
import MostPicked from '../parts/MostPicked';
import Categories from '../parts/Categories';

import data from '../json/landingPage.json';

function LandingPage(props) {
  const refMostPicked = React.useRef(null);
  return (
    <>
      <Header {...props} />
      <Hero refMostPicked={refMostPicked} data={data.hero} />
      <MostPicked refMostPicked={refMostPicked} data={data.mostPicked} />
      <Categories data={data.categories} />
    </>
  );
}

export default LandingPage;
