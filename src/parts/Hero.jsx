import propTypes from 'prop-types';
import React from 'react';
import Fade from 'react-reveal/Fade';

import ImageHero from '../assets/images/img-hero.jpg';
import ImageHero_ from '../assets/images/img-hero-frame.jpg';

import Button from '../elements/Button';
import numberFormat from '../utils/formatNumber';

function Hero({ data, refMostPicked }) {
  const { travelers, cities, treasures } = data;

  const showMostPicked = () => {
    window.scrollTo({
      top: refMostPicked.current.offsetTop - 30,
      behavior: 'smooth',
    });
  };

  return (
    <Fade bottom>
      <section className="container pt-4">
        <div className="row align-items-center justify-content-between">
          <div className="col-auto pr-5" style={{ width: 500 }}>
            <h1 className="fw-bold line-height-1 mb-3">
              Forget Busy Work,
              <br />
              Start Next Vacation
            </h1>
            <p className="mb-4 fw-light text-gray-500 w-75" style={{ LineHeight: '170%' }}>
              We provide what you need to enjoy your holiday with family.
              Time to make another memorable moments.
            </p>
            <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
              Show Me Now
            </Button>

            <div className="row" style={{ marginTop: 80 }}>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img width="36" height="36" src="./images/icons/icon-traveler.svg" alt={`${travelers} Travelers`} />
                <h6 className="mt-3">
                  {numberFormat(travelers)}
                  <span className="text-gray-500 fw-light"> travelers</span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img width="36" height="36" src="./images/icons/icon-treasure.svg" alt={`${travelers} Treasure`} />
                <h6 className="mt-3">
                  {numberFormat(treasures)}
                  <span className="text-gray-500 fw-light"> treasure</span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img width="36" height="36" src="./images/icons/icon-cities.svg" alt={`${travelers} Cities`} />
                <h6 className="mt-3">
                  {numberFormat(cities)}
                  <span className="text-gray-500 fw-light"> cities</span>
                </h6>
              </div>
            </div>
          </div>

          <div className="col-6 ps-5">
            <div className="position-relative" style={{ width: 540, height: 370 }}>
              <img src={ImageHero} alt="Room with couches" className="img-fluid position-absolute" style={{ margin: '-30px 0 0 -30px', zIndex: 1 }} />
              <img src={ImageHero_} alt="Room with couches frame" className="img-fluid position-absolute" style={{ margin: '0 -15px -15px 0' }} />
            </div>
          </div>
        </div>
      </section>

    </Fade>
  );
}

export default Hero;

Hero.propTypes = {
  refMostPicked: propTypes.objectOf(propTypes.object),
  data: propTypes.objectOf(propTypes.number),
};

Hero.defaultProps = {
  refMostPicked: {},
  data: {},
};
