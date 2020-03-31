import { createAction, createReducer } from "@reduxjs/toolkit";

const keyPressA = createAction('key_press');
const resetA = createAction('reset');

const textboxR = createReducer({ value: '' }, {
  [keyPressA]: (state, action) => ({ value: action.payload }),
  [resetA]: () => ({ value: '' })
})

export { textboxR as default, keyPressA, resetA }