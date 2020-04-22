import React from 'react';
import { useSelector } from 'react-redux';
import shortid from 'shortid';

import Card from './Card';
import { MAIN_REDUCER } from '../reducers';

import './App.css';

const Content = () => {
  const cards = useSelector((state) => state[MAIN_REDUCER].cards) || [];
  return (
    <main className="content">
      <div className="cards">
        {cards.map((card) => (
          <Card key={shortid.generate()} {...card} />
        ))}
      </div>
    </main>
  );
};

export default Content;
