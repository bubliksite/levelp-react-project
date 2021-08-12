import React from 'react';
import './styles.scss';
import Image from '../../Image';
import iconClose from '../../../assets/icons/icon-close.svg';
import Input from '../../Input';
import Button from '../../Button';

export default function ModalEditTodo({
  id,
  title,
  limit,
  valueTitle,
  valueText,
  validationError,
  handlerChangeTitle,
  handlerChangeText,
  handlerEditTodo,
  closeModalEditTodo,
}) {
  return (
    <>
      <div className="modal">
        <div className="modal__card">
          <div className="modal__close" onClick={() => closeModalEditTodo()}>
            <Image source={iconClose} />
          </div>
          <div className="modal__head">
            <h3>Edit task "{title}"</h3>
          </div>
          <div className="modal__body">
            <form>
              <Input
                value={valueTitle}
                limit={limit}
                label="Enter the title for task"
                error={validationError}
                onChange={handlerChangeTitle}
              />
              <Input
                value={valueText}
                label="Enter the text for task"
                onChange={handlerChangeText}
              />
              <div className="form__buttons">
                <Button
                  type="submit"
                  variant="success"
                  title="Update"
                  disabled={validationError || !valueTitle}
                  onClick={(e) => handlerEditTodo(e, id)}
                />
                <Button variant="danger" title="Cancel" onClick={closeModalEditTodo} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
