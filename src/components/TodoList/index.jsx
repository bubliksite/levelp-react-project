import React from 'react';
import './styles.scss';
import ListItem from '../ListItem';
import Button from '../Button';

const TodoList = ({
  todo,
  messageSaveToLocalStorage,
  showModalDeleteTodo,
  showModalEditTodo,
  saveToLocalStorage,
  removeFromLocalStorage,
}) => {
  return (
    <>
      <div className="list-group">
        {todo.length ? (
          todo.map((item) => {
            return (
              <ListItem
                key={item.id}
                item={item}
                showModalDeleteTodo={showModalDeleteTodo}
                showModalEditTodo={showModalEditTodo}
              />
            );
          })
        ) : (
          <div className="list-empty">
            <em>
              No data in the list. <br />
              Please, press "+" button to add first item
            </em>
          </div>
        )}
      </div>
      {todo.length ? (
        <div className="ls__buttons">
          <p className="message">{messageSaveToLocalStorage}</p>
          <Button variant="success" title="Save All" onClick={saveToLocalStorage} />
          <Button variant="danger" title="Remove All" onClick={removeFromLocalStorage} />
        </div>
      ) : null}
    </>
  );
};

export default TodoList;
