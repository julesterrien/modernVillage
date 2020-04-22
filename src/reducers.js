/*
  novux is a reducer factory pattern I wrote/open sourced
  https://www.npmjs.com/package/novux
*/
import { createReducer } from 'novux';
import shortid from 'shortid';
import { reducer as formReducer } from 'redux-form'

import { PATHS } from './paths';

export const MAIN_REDUCER = 'main';
export const ROUTER_REDUCER = 'router';
export const FORM_REDUCER = 'form';

const DEFAULT_CARDS = Array(1)
  .fill(null)
  .map(() => ({
    title: 'Welcome to ModernVillage',
    description: 'Create cards to organize your family life',
    id: shortid.generate(),
  }));

const mainReducer = createReducer(MAIN_REDUCER, {
  newCardModalIsOpen: false,
  cards: DEFAULT_CARDS,
});

const routerReducer = createReducer(ROUTER_REDUCER, {
  location: PATHS.dashboard,
});

const reducers = {
  [MAIN_REDUCER]: mainReducer,
  [ROUTER_REDUCER]: routerReducer,
  [FORM_REDUCER]: formReducer,
};

export default reducers;
