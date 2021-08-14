import React from 'react';
import './styles.scss';
import Image from '../../Image';
import iconClose from '../../../assets/icons/icon-close.svg';
import Button from '../../Button';

import PropTypes from 'prop-types';

export default function ModalDeleteTodo({ id, title, handlerDeleteTodo, closeModalDeleteTodo }) {
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
            <p>Are you sure you want to delete task "{title}"?</p>
            <div className="modal__buttons">
              <Button variant="danger" title="Delete" onClick={(e) => handlerDeleteTodo(e, id)} />
              <Button title="Cancel" onClick={closeModalDeleteTodo} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

ModalDeleteTodo.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  handlerDeleteTodo: PropTypes.func,
  closeModalDeleteTodo: PropTypes.func,
};
