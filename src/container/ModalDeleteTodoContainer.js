import React from 'react';

import ModalDeleteTodo from '../components/Modals/ModalDeleteTodo';
import { useDispatch } from 'react-redux';
import { actionHideModal } from '../store/modals';

export default function ModalDeleteTodoContainer() {
  const dispatch = useDispatch();

  const closeModalDeleteTodo = () => {
    dispatch(actionHideModal());
  };
  return <ModalDeleteTodo closeModalDeleteTodo={closeModalDeleteTodo} />;
}
