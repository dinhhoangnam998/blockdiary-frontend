import React from 'react'
import DayDiary from './DayDiary'
import LoadMoreBar from './LoadMoreBar'
import Title from './Title';

function Main() {
  return (
    <div className="mt-3 border p-2">
      <Title></Title>
      <DayDiary></DayDiary>
      <LoadMoreBar></LoadMoreBar>
    </div>
  )
}

export default Main
