import React from 'react';

import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button(props) {
  const {
    className,
    isPrimary, isSmall, isLarge, isBlock, hasShadow,
    onClick, type, isExternal, children, href, style, target, isLoading, isDisabled,
  } = props;

  const classess = ['btn', className];
  if (isPrimary) classess.push('btn-primary');
  if (isSmall) classess.push('btn-sm');
  if (isLarge) classess.push('btn-lg');
  if (isBlock) classess.push('btn-block');
  if (hasShadow) classess.push('btn-shadow');

  if (isLoading || isDisabled) {
    if (isDisabled) classess.push('disabled');
    return (
      <span className={classess.join(' ')} style={style}>
        {(isLoading) ? (
          <>
            <span className="spinner-border spinner-border-sm mx-5" />
            <span className="visually-hidden">Loading...</span>
          </>
        ) : children }
      </span>
    );
  }

  if (type === 'link') {
    if (isExternal) {
      return <a href={href} className={classess.join(' ')} style={style} target={target === '_blank' ? '_blank' : undefined} rel="noreferrer noopener">{children}</a>;
    }
    return <Link to={href} className={classess.join(' ')} style={style} onClick={onClick}>{children}</Link>;
  }
  return <button type="button" className={classess.join(' ')} style={style} onClick={onClick}>{children}</button>;
}

export default Button;

Button.propTypes = {
  type: propTypes.oneOf(['button', 'link']),
  onClick: propTypes.func,
  target: propTypes.string,
  href: propTypes.string,
  style: propTypes.objectOf(propTypes.object),
  className: propTypes.string,
  isPrimary: propTypes.bool,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isBlock: propTypes.bool,
  isExternal: propTypes.bool,
  hasShadow: propTypes.bool,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.oneOfType([propTypes.string, propTypes.object])),
    propTypes.string,
  ]),
};

Button.defaultProps = {
  type: 'button',
  onClick: () => {},
  target: '',
  href: '#',
  style: {},
  className: '',
  isPrimary: false,
  isDisabled: false,
  isLoading: false,
  isSmall: false,
  isLarge: false,
  isBlock: true,
  isExternal: false,
  hasShadow: false,
  children: 'button',
};
