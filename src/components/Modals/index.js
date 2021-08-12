import React from 'react';
import { useSelector } from 'react-redux';
import ModalAddTodoContainer from '../../container/ModalAddTodoContainer';
import ModalDeleteTodoContainer from '../../container/ModalDeleteTodoContainer';
import ModalEditTodoContainer from '../../container/ModalEditTodoContainer';

const modalCollections = {
  modalAddTodo: ModalAddTodoContainer,
  modalDeleteTodo: ModalDeleteTodoContainer,
  modalEditTodo: ModalEditTodoContainer,
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
