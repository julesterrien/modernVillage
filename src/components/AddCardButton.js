import React from 'react';
import { update } from 'novux';
import { useDispatch } from 'react-redux';

import './App.css';
import { MAIN_REDUCER } from '../reducers';

const AddCardButton = () => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(
      update(MAIN_REDUCER, 'open new modal', {
        newCardModalIsOpen: true,
      })
    );
  };

  return (
    <div className="add-button-wrapper">
      <button onClick={onClick}>
        <i className="icon">+</i>
      </button>
    </div>
  );
};

export default AddCardButton;
