import React from 'react';

import ModalEditTodo from '../components/Modals/ModalEditTodo';
import { useDispatch } from 'react-redux';
import { actionHideModal } from '../store/modals';

export default function ModalEditTodoContainer() {
  const dispatch = useDispatch();

  const closeModalEditTodo = () => {
    dispatch(actionHideModal());
  };
  return <ModalEditTodo closeModalEditTodo={closeModalEditTodo} />;
}
