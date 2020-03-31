import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { keyPressA } from "../../redux/textboxS"

function DiaryTextbox() {
  const value = useSelector(state => state.textboxS.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="form-group mb-1">
        <textarea className="form-control" value={value} name="diary" id="diary" rows="8" placeholder="Write your diary...."
          onChange={e => dispatch(keyPressA(e.target.value))}></textarea>
      </div>
    </div>
  )
}



export default DiaryTextbox
