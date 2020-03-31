import React from 'react'
import { useSelector } from 'react-redux'

import DayDiary from './DayDiary'

function DiaryList() {
  const diaries = useSelector(state => state.diaryS.diaries)
  return (
    <div>
      <div id="accordianId" role="tablist" aria-multiselectable="true">
        {diaries.map(diary => <DayDiary diary={diary}></DayDiary>)}
      </div>
    </div>
  )
}

export default DiaryList
