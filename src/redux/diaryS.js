import { createAction, createReducer } from "@reduxjs/toolkit";
import { resetA } from './textboxS'

const addTempDiary = createAction('add_temp_diary');
const updateTempDiary = createAction('update_temp_diary');

const initState = createAction('fetch_init_state');

import { SERVER_URL } from '../config/config'

const fetchInitState = () => (dispatch, getState) => {
  return (
    fetch(`${SERVER_URL}/diaries`).then(res => res.json()).then(diaries => dispatch(initState(diaries)))
  )
}

const addDiary = () => (dispatch, getState) => {
  let diary = { content: getState().textboxS.value };
  dispatch((addTempDiary(Object.assign({}, diary))));
  dispatch(resetA());

  return (
    fetch(`${SERVER_URL}/diaries`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(diary)
    }).then(res => res.json())
      .then(diary => dispatch(updateTempDiary(diary)))
  )
}

const addTempDiaryH = (state, action) => {
  const tempDiary = action.payload;
  tempDiary.status = false;
  state.diaries.unshift(tempDiary);
  return state;
}

const updateTempDiaryH = (state, action) => {
  const diary = action.payload;
  diary.status = true;
  state.diaries[0] = diary;
  return state;
}

const initStateH = (state, action) => {
  return action.payload;
}

const diaryR = createReducer({ diaries: [] }, {
  [addTempDiary]: addTempDiaryH,
  [updateTempDiary]: updateTempDiaryH,
  [initState]: initStateH,
})

export { diaryR as default, addDiary, fetchInitState }