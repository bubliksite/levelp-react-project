import React from 'react';
import './styles.scss';
import Button from '../Button';

import iconTrash from '../../assets/icons/icon-trash.svg';

const ListItem = () => {
  return (
    <>
      <div className="item">
        <div className="item__title">title</div>
        <hr />
        <div className="item__content content">
          <p className="content__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <div className="content__buttons">
            <Button icon={iconTrash} variant="danger" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListItem;
