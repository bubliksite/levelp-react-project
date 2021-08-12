import React from 'react';
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

export default Button;
