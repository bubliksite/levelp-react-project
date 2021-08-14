import React from 'react';
import './styles.scss';
import Image from '../Image';
import iconAdd from '../../assets/icons/icon-add.svg';
import { actionShowModal } from '../../store/modals';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const AddButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const showModalAddTodo = () => {
    history.replace('');
    dispatch(
      actionShowModal({
        name: 'modalAddTodo',
      }),
    );
  };
  return (
    <>
      <button className="add-button" onClick={() => showModalAddTodo()}>
        <Image source={iconAdd} />
      </button>
    </>
  );
};

export default AddButton;
