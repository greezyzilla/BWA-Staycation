/* eslint-disable no-underscore-dangle */
import propTypes from 'prop-types';
import React from 'react';

import Button from '../elements/Button';

function MostPicked(props) {
  const { data, refMostPicked } = props;
  return (
    <section className="container" ref={refMostPicked}>
      <h4 className="mb-3">Most Picked</h4>
      <div className="container-grid">
        {data.map((item, index) => (
          <div className={`item column-4 ${index === 0 ? 'row-2' : 'row-1'}`} key={Math.random()}>
            <div className="card card-featured">
              <div className="tag">
                $
                {item.price}
                <span className="font-weight-light">
                  {' '}
                  per
                  {' '}
                  {item.unit}
                </span>
              </div>
              <figure className="img-wrapper">
                <img src={item.imageUrl} alt={item.name} className="img-cover" />
              </figure>
              <div className="meta-wrapper">
                <Button className="streched-link d-block text-white" type="link" href={`/properties/${item._id}`}>
                  <h5>{item.name}</h5>
                </Button>
                <span>
                  {item.city}
                  ,
                  {' '}
                  {item.country}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MostPicked;

MostPicked.propTypes = {
  data: propTypes.arrayOf(propTypes.object),
  refMostPicked: propTypes.objectOf(propTypes.object),
};

MostPicked.defaultProps = {
  data: [],
  refMostPicked: {},
};
