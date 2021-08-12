import React from 'react';
import './styles.scss';
import ListItem from '../ListItem';

const TodoList = ({ todo, showModalDeleteTodo, showModalEditTodo }) => {
  return (
    <>
      <div className="list-group">
        {todo.map((item) => {
          return (
            <ListItem
              item={item}
              showModalDeleteTodo={showModalDeleteTodo}
              showModalEditTodo={showModalEditTodo}
            />
          );
        })}
      </div>
    </>
  );
};

export default TodoList;
