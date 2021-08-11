import React from 'react';
import './styles.scss';
import Image from '../Image';
import iconAdd from '../../assets/icons/icon-add.svg';

const AddButton = () => {
  return (
    <>
      <button className="add-button">
        <Image source={iconAdd} />
      </button>
    </>
  );
};

export default AddButton;
