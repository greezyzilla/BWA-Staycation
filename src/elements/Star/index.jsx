import React from 'react';

import propTypes from 'prop-types';
import './index.scss';

function Star({
  value, height, width, spacing, className,
}) {
  const decimals = Number(value) % 1;

  const star = [];
  let leftPost = 0;
  for (let index = 0; index < 5 && index < value - decimals; index += 1) {
    leftPost += width;
    star.push(
      <div
        className="star"
        key={Math.random()}
        style={{
          left: index * width, width, height, marginRight: spacing,
        }}
      />,
    );
  }
  if (decimals > 0 && value <= 5) {
    star.push(
      <div className="star" key={Math.random()} style={{ left: leftPost, height, width: decimals * width - spacing / 2 }} />,
    );
  }

  const starPlaceholder = [];
  for (let index = 0; index < 5; index += 1) {
    starPlaceholder.push(
      <div
        className="star placeholder"
        key={Math.random()}
        style={{
          left: index * width, height, width, marginRight: spacing,
        }}
      />,
    );
  }

  return (
    <>
      <div className={['stars', className].join(' ')} style={{ height }}>
        {starPlaceholder}
        {star}
      </div>
    </>
  );
}

export default Star;

Star.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  width: propTypes.number,
  height: propTypes.number,
  spacing: propTypes.number,
};

Star.defaultProps = {
  className: '',
  value: 0,
  width: 0,
  height: 0,
  spacing: 0,
};
