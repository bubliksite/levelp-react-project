import React from 'react';

import PropTypes from 'prop-types';

import './styles.scss';
import Image from '../Image';

const Button = ({ icon, title, type, variant, disabled, onClick }) => {
  const classes = `${variant || ''} ${title ? 'px' : null}`;
  return (
    <>
      <button disabled={disabled} type={type || 'button'} className={classes} onClick={onClick}>
        {icon ? <Image source={icon} /> : null}
        {title}
      </button>
    </>
  );
};

Button.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
