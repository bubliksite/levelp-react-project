import React from 'react';
import './styles.scss';
import Image from '../../Image';
import iconClose from '../../../assets/icons/icon-close.svg';
import Input from '../../Input';
import Button from '../../Button';

export default function ModalEditTodo({ closeModalEditTodo }) {
  return (
    <>
      <div className="modal">
        <div className="modal__card">
          <div className="modal__close" onClick={() => closeModalEditTodo()}>
            <Image source={iconClose} />
          </div>
          <div className="modal__head">
            <h3>Edit task</h3>
          </div>
          <div className="modal__body">
            <form>
              <Input label="Enter the title for task" />
              <Input label="Enter the text for task" />
              <div className="form__buttons">
                <Button type="submit" variant="success" title="Update" />
                <Button variant="danger" title="Cancel" onClick={closeModalEditTodo} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
