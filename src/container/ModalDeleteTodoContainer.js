import React from 'react';

import ModalDeleteTodo from '../components/Modals/ModalDeleteTodo';
import { useDispatch } from 'react-redux';
import { actionHideModal } from '../store/modals';
import { actionDeleteTodo } from '../store/todos';

export default function ModalDeleteTodoContainer({ id }) {
  const dispatch = useDispatch();

  const closeModalDeleteTodo = () => {
    dispatch(actionHideModal());
  };

  const handlerDeleteTodo = (e, id) => {
    dispatch(actionDeleteTodo(id));
    closeModalDeleteTodo();
  };
  return (
    <ModalDeleteTodo
      id={id}
      closeModalDeleteTodo={closeModalDeleteTodo}
      handlerDeleteTodo={handlerDeleteTodo}
    />
  );
}
