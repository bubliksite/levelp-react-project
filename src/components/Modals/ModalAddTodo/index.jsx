import React from 'react';
import './styles.scss';
import Image from '../../Image';
import Input from '../../Input';
import Button from '../../Button';

import iconClose from '../../../assets/icons/icon-close.svg';

export default function ModalAddTodo({
  title,
  text,
  limit,
  validationError,
  handlerChangeTitle,
  handlerChangeText,
  handlerAddTodo,
  closeModalAddTodo,
}) {
  return (
    <>
      <div className="modal">
        <div className="modal__card">
          <div className="modal__close" onClick={() => closeModalAddTodo()}>
            <Image source={iconClose} />
          </div>
          <div className="modal__head">
            <h3>Add task</h3>
          </div>
          <div className="modal__body">
            <form onSubmit={(e) => handlerAddTodo(e)}>
              <Input
                label="Enter the title for task"
                placeholder="Enter title here"
                value={title}
                autofocus={true}
                error={validationError}
                limit={limit}
                onChange={(e) => handlerChangeTitle(e)}
              />
              <Input
                label="Enter the text for task"
                placeholder="Enter text here"
                value={text}
                onChange={(e) => handlerChangeText(e)}
              />
              <div className="form__buttons">
                <Button
                  type="submit"
                  variant="success"
                  title="Save"
                  disabled={validationError || !title}
                />
                <Button title="Cancel" onClick={closeModalAddTodo} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
