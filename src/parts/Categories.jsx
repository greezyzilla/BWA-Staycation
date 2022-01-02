/* eslint-disable no-underscore-dangle */
import React from 'react';
import Button from '../elements/Button';

function Categories({ data }) {
  return (
    data.map((category) => (
      <section className="container" key={Math.random()}>
        <h4 className="mb-3 fw-medium">
          {category.name}
        </h4>
        <div className="container-grid">
          {
            category.items.length === 0 ? (
              <div className="row">
                <div className="col-auto align-items-center">
                  There si no property at this category
                </div>
              </div>
            ) : category.items.map((item) => (
              <div className="item column-3 row-1" key={Math.random()}>
                <div className="card">
                  {item.isPopular && (
                    <div className="tag">
                      Popular
                      <span className="fw-light">Choice</span>
                    </div>
                  )}
                  <figure className="img-wrapper" style={{ height: 180 }}>
                    <img src={item.imageUrl} alt={item.name} className="img-cover" />
                  </figure>
                  <div className="meta-wrapper">
                    <Button className="stretched-link d-block text-gray-800" href={`/properties/${item._id}`} type="link">
                      <h5 className="h4">
                        {item.name}
                      </h5>
                    </Button>
                    <span className="text-gray-500">
                      {item.city}
                      ,
                      {' '}
                      {item.country}
                    </span>
                  </div>
                </div>
              </div>
            ))
        }
        </div>
      </section>
    ))
  );
}

export default Categories;
