import React from 'react';
import cn from 'classnames';
import { reduxForm, Field as ReduxFormField } from 'redux-form';

import Field from './Field';

import './App.css';

const NEW_CARD_FORM = 'newCardForm';

const formConfig = {
  form: NEW_CARD_FORM,
  validate: (values) => {
    const errors = {};
    if (values) {
      if (!values.title) {
        errors.title = 'Required';
      }
      if (!values.description) {
        errors.description = 'Required';
      }
    }
    return errors;
  }
};

const CardFormComponent = ({ onSubmit, handleSubmit, pristine, invalid }) => {
  return (
    <div className="new-card-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <ReduxFormField
          autoFocus
          label="Title"
          name="title"
          placeholder="My new title"
          component={Field}
        />
        <ReduxFormField
          label="Description"
          name="description"
          placeholder="My new description"
          component={Field}
        />
        <footer className="modal-footer">
          <button
            disabled={pristine || invalid}
            type="submit"
            className={cn('submit-btn', {
              disabled: pristine || invalid,
            })}
          >
            Submit
          </button>
        </footer>
      </form>
    </div>
  );
};

export default reduxForm(formConfig)(CardFormComponent);

