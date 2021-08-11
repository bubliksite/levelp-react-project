import React from 'react';
import './styles.scss';

const Input = ({ placeholder }) => {
  return (
    <>
      <input placeholder={placeholder} type="text" />
    </>
  );
};

export default Input;
