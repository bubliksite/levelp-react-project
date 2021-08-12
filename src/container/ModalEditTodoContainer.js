import React, { useState } from 'react';

import ModalEditTodo from '../components/Modals/ModalEditTodo';
import { useDispatch, useSelector } from 'react-redux';
import { actionHideModal } from '../store/modals';
import { actionEditTodo } from '../store/todos';

export default function ModalEditTodoContainer({ id }) {
  const dispatch = useDispatch();

  const { todo } = useSelector((state) => state.todo);

  const title = todo.find((item) => item.id === id).title;
  const text = todo.find((item) => item.id === id).text;

  const limit = 30;

  const [validationError, setValidationError] = useState('');
  const [valueTitle, setValueTitle] = useState(title);
  const [valueText, setValueText] = useState(text);

  const handlerChangeTitle = (e) => {
    setValueTitle(e.target.value);
    if (e.target.value.length > limit) {
      setValidationError(`The length of title should be equal or less than ${limit} chars`);
    } else {
      setValidationError('');
    }
  };

  const handlerChangeText = (e) => {
    setValueText(e.target.value);
  };

  const closeModalEditTodo = () => {
    dispatch(actionHideModal());
  };

  const handlerEditTodo = (e, id) => {
    e.preventDefault();
    switch (true) {
      case !valueTitle.length:
        setValidationError("Field can't be empty");
        break;
      case valueTitle.length > limit:
        setValidationError(`The length of title should be equal or less than ${limit} chars`);
        break;
      default:
        const data = {
          title: valueTitle,
          text: valueText,
          id,
        };
        dispatch(actionEditTodo(data));
        closeModalEditTodo();
    }
  };
  return (
    <ModalEditTodo
      id={id}
      title={title}
      limit={limit}
      valueTitle={valueTitle}
      valueText={valueText}
      validationError={validationError}
      handlerChangeTitle={handlerChangeTitle}
      handlerChangeText={handlerChangeText}
      handlerEditTodo={handlerEditTodo}
      closeModalEditTodo={closeModalEditTodo}
    />
  );
}
