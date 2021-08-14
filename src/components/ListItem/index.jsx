import React from 'react';
import './styles.scss';
import Button from '../Button';

import PropTypes from 'prop-types';

import iconTrash from '../../assets/icons/icon-trash.svg';

const ListItem = ({ item, showModalDeleteTodo, showModalEditTodo }) => {
  return (
    <>
      <div className="item" onClick={() => showModalEditTodo(item.id)}>
        <div className="item__title">{item.title}</div>
        <hr />
        <div className="item__content content">
          <p className="content__text">{item.text ? item.text : <em>No description in task</em>}</p>
          <div className="content__buttons">
            <Button
              icon={iconTrash}
              variant="danger"
              onClick={(e) => showModalDeleteTodo(e, item.id, item.title)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

ListItem.propTypes = {
  item: PropTypes.object,
  showModalDeleteTodo: PropTypes.func,
  showModalEditTodo: PropTypes.func,
};

export default ListItem;
