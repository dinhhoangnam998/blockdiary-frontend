import React from 'react'
import DayDiary from './DayDiary'
import LoadMoreBar from './LoadMoreBar'
import Title from './Title';
import DiaryList from './DiaryList';

function Main() {
  return (
    <div className="mt-1">
      <Title></Title>
      <div className="border mt-2 py-3 px-2">
        <DiaryList></DiaryList>
        <LoadMoreBar></LoadMoreBar>
      </div>
    </div>

  )
}

export default Main
