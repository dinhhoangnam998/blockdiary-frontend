import { createAction, createReducer } from "@reduxjs/toolkit";
import { resetA } from './textboxS'

const addTempDiary = createAction('add_temp_diary');
const updateTempDiary = createAction('update_temp_diary');

const addDiary = () => (dispatch, getState) => {
  let diary = { content: getState().textboxS.value };
  dispatch((addTempDiary(diary)));
  dispatch(resetA());

  return (
    fetch(`http://localhost:3001/diaries`, {
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

const diaryR = createReducer({ diaries: [] }, {
  [addTempDiary]: addTempDiaryH,
  [updateTempDiary]: updateTempDiaryH,
})

export { diaryR as default, addDiary }