import React from 'react';
import './styles.scss';
import Image from '../../Image';
import iconClose from '../../../assets/icons/icon-close.svg';
import Button from '../../Button';

export default function ModalDeleteTodo({ closeModalDeleteTodo }) {
  return (
    <>
      <div className="modal">
        <div className="modal__card">
          <div className="modal__close" onClick={() => closeModalDeleteTodo()}>
            <Image source={iconClose} />
          </div>
          <div className="modal__head">
            <h3>Delete task?</h3>
          </div>
          <div className="modal__body">
            <p>Are you sure you want to delete task 'title'?</p>
            <div className="modal__buttons">
              <Button variant="danger" title="Delete" />
              <Button title="Cancel" onClick={closeModalDeleteTodo} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
