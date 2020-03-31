import React from 'react'
import { useDispatch } from "react-redux"
import { addDiary } from "../../redux/diaryS"
import { resetA } from '../../redux/textboxS'

function ButtonBar() {
  const dispatch = useDispatch();
  return (
    <div className="mt-2">
      <div className="text-right">
        <button className="btn btn-light d-inline-block mr-1" onClick={(e) => { e.preventDefault(); dispatch(resetA()) }}>Clear</button>
        <button className="btn btn-success" onClick={(e) => { e.preventDefault(); dispatch(addDiary()); }}>Save</button>
      </div>
    </div>
  )
}

export default ButtonBar
