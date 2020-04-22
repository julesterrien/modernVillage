import React from 'react';
import { update } from 'novux';
import { useDispatch } from 'react-redux';

import './App.css';

import EditCardModal from './EditCardModal';
import { MAIN_REDUCER } from '../reducers';

const Card = (card) => {
  const dispatch = useDispatch();

  const { title, description, id } = card;  

  const onClick = () => {
    dispatch(update(MAIN_REDUCER, 'open card', {
      activeCardId: id,
    }))
  };

  return (
    <>
      <EditCardModal {...card} />
      <div className="card">
        <button className="card-button" onClick={onClick}>
          <h4>{title}</h4>
          <p>{description}</p>
        </button>
      </div>
    </>
  );
};

export default Card;
