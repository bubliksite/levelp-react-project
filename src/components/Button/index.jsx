import React from 'react';
import './styles.scss';
import Image from '../Image';

const Button = ({ icon, title, variant }) => {
  return (
    <>
      <button className={variant}>
        {icon ? <Image source={icon} /> : null}
        {title}
      </button>
    </>
  );
};

export default Button;
