import React from 'react';
import { useSelector } from 'react-redux';
import ModalAddTodoContainer from '../../container/ModalAddTodoContainer';

const modalCollections = {
  modalAddTodo: ModalAddTodoContainer,
};

export default function Modals() {
  const modal = useSelector((state) => state.modal);
  if (!modal.length) {
    return null;
  } else {
    return (
      <>
        {modal.map((item) => {
          const CurrentModal = modalCollections[item.name];
          return <CurrentModal {...item} key={item.name} />;
        })}
      </>
    );
  }
}
