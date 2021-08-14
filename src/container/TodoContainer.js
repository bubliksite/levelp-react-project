import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import TodoList from '../components/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { actionShowModal } from '../store/modals';
import { actionGetTodoFromLocalStorage, actionRemoveTodoFromLocalStorage } from '../store/todos';

export default function TodoContainer() {
  const enums = {
    todoKeyLS: 'todoLevelProject',
  };

  const [messageSaveToLocalStorage, setMessageSaveToLocalStorage] = useState('');

  useEffect(() => {
    getTodoFromLocalStorage();
  }, []);

  const dispatch = useDispatch();

  const { todo } = useSelector((state) => state.todo);

  const location = useLocation();
  const getSearchValue = new URLSearchParams(location.search).get('search');
  const searchCategoryTitle = getSearchValue
    ? todo.filter((item) => item.title.toLowerCase().includes(getSearchValue.toLowerCase()))
    : todo;

  const showModalDeleteTodo = (e, id, title) => {
    e.stopPropagation();
    dispatch(
      actionShowModal({
        name: 'modalDeleteTodo',
        id,
        title,
      }),
    );
  };

  const showModalEditTodo = (id) => {
    dispatch(
      actionShowModal({
        name: 'modalEditTodo',
        id,
      }),
    );
  };

  const getTodoFromLocalStorage = () => {
    const todoInLocalStorage = window.localStorage.getItem(enums.todoKeyLS);
    if (todoInLocalStorage) {
      const todo = JSON.parse(todoInLocalStorage);
      dispatch(actionGetTodoFromLocalStorage(todo));
    }
  };

  const saveToLocalStorage = () => {
    window.localStorage.setItem(enums.todoKeyLS, JSON.stringify(todo));
    setMessageSaveToLocalStorage('All records saved in Local Storage');
    setTimeout(() => setMessageSaveToLocalStorage(''), 2000);
  };

  const removeFromLocalStorage = () => {
    window.localStorage.clear();
    dispatch(actionRemoveTodoFromLocalStorage());
  };

  return (
    <TodoList
      todo={searchCategoryTitle}
      messageSaveToLocalStorage={messageSaveToLocalStorage}
      saveToLocalStorage={saveToLocalStorage}
      removeFromLocalStorage={removeFromLocalStorage}
      showModalDeleteTodo={showModalDeleteTodo}
      showModalEditTodo={showModalEditTodo}
    />
  );
}
