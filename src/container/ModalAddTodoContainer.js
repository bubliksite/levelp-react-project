import React, { useState } from 'react';

import ModalAddTodo from '../components/Modals/ModalAddTodo';
import { useDispatch } from 'react-redux';
import { actionHideModal } from '../store/modals';
import { actionAddTodo } from '../store/todos';

export default function ModalAddTodoContainer() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const limit = 30;
  const [validationError, setValidationError] = useState('');

  const handlerChangeTitle = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value.length + '/' + limit);
    if (e.target.value.length > limit) {
      setValidationError(`The length of title should be equal or less than ${limit} chars`);
    } else {
      setValidationError('');
    }
  };

  const handlerChangeText = (e) => {
    setText(e.target.value);
  };

  const handlerAddTodo = (e) => {
    e.preventDefault();
    switch (true) {
      case !title.length:
        setValidationError("Field can't be empty");
        break;
      case title.length > limit:
        setValidationError(`The length of title should be equal or less than ${limit} chars`);
        break;
      default:
        const data = {
          id: Date.now(),
          title,
          text,
        };
        dispatch(actionAddTodo(data));
        setTitle('');
        setText('');
        closeModalAddTodo();
    }
  };

  const closeModalAddTodo = () => {
    dispatch(actionHideModal());
  };

  return (
    <ModalAddTodo
      title={title}
      text={text}
      limit={limit}
      validationError={validationError}
      handlerChangeTitle={handlerChangeTitle}
      handlerChangeText={handlerChangeText}
      handlerAddTodo={handlerAddTodo}
      closeModalAddTodo={closeModalAddTodo}
    />
  );
}
