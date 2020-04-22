import React from 'react';
import shortid from 'shortid';
import { update } from 'novux';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { MAIN_REDUCER } from '../reducers';

import Modal from './Modal';
import CardForm from './CardForm';

const NewCardModal = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state[MAIN_REDUCER].cards);

  const newCardModalIsOpen = useSelector(
    (state) => state[MAIN_REDUCER].newCardModalIsOpen
  );

  if (!newCardModalIsOpen) {
    return null;
  }

  const onClose = () => {
    dispatch(
      update(MAIN_REDUCER, 'close new modal', {
        newCardModalIsOpen: false,
      })
    );
  };

  const onSubmit = (values) => {
    const newCard = {
      title: values.title,
      description: values.description,
      id: shortid.generate(),
    };
    dispatch(update(MAIN_REDUCER, 'add new card', {
      cards: [...cards, newCard],
    }));
    dispatch(update(MAIN_REDUCER, 'close modal', {
      newCardModalIsOpen: false,
    }));
  };

  return (
    <Modal onClose={onClose}>
      <CardForm onSubmit={onSubmit} />
    </Modal>
  );
};

export default NewCardModal;
