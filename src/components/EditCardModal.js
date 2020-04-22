import React from 'react';
import { update } from 'novux';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { MAIN_REDUCER } from '../reducers';

import Modal from './Modal';
import CardForm from './CardForm';

const NewCardModal = ({ id, title, description }) => {
  const dispatch = useDispatch();
  const activeCardId = useSelector((state) => state[MAIN_REDUCER].activeCardId);
  const cards = useSelector((state) => state[MAIN_REDUCER].cards);

  if (activeCardId !== id) {
    return null;
  }

  const onClose = () => {
    dispatch(
      update(MAIN_REDUCER, 'close new modal', {
        activeCardId: undefined,
      })
    );
  };

  const onSubmit = (values) => {
    const cardIndex = cards.findIndex((el) => el.id === id);
    const card = cards[cardIndex];
    const updatedCards = [...cards];
    updatedCards[cardIndex] = {
      ...card,
      ...values,
    };

    dispatch(
      update(MAIN_REDUCER, 'edit card', {
        cards: updatedCards,
      })
    );
    dispatch(
      update(MAIN_REDUCER, 'close modal', {
        activeCardId: undefined,
      })
    );
  };

  return (
    <Modal onClose={onClose}>
      <CardForm initialValues={{ title, description }} onSubmit={onSubmit} />
    </Modal>
  );
};

export default NewCardModal;
