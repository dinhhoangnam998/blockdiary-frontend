import React from 'react'
import { useDispatch } from "react-redux"
import { addDiary } from "../../redux/diaryS"
function ButtonBar() {
  const dispatch = useDispatch();
  return (
    <div className="mt-2">
      <div className="text-right">
        <button className="btn btn-light d-inline-block mr-1" type="reset">Clear</button>
        <button className="btn btn-success" onClick={() => dispatch(addDiary())}>Save</button>
      </div>
    </div>
  )
}

export default ButtonBar
