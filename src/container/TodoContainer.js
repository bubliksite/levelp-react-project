import React from 'react';

import TodoList from '../components/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { actionShowModal } from '../store/modals';

export default function TodoContainer() {
  const dispatch = useDispatch();

  const { todo } = useSelector((state) => state.todo);

  const showModalDeleteTodo = (e) => {
    e.stopPropagation();
    dispatch(
      actionShowModal({
        name: 'modalDeleteTodo',
      }),
    );
  };

  const showModalEditTodo = () => {
    dispatch(
      actionShowModal({
        name: 'modalEditTodo',
      }),
    );
  };

  return (
    <TodoList
      todo={todo}
      showModalDeleteTodo={showModalDeleteTodo}
      showModalEditTodo={showModalEditTodo}
    />
  );
}
