import React from 'react'
import DiaryTextbox from './DiaryTextbox'
import ButtonBar from './ButtonBar';

function DiaryForm() {
  return (
    <div className="mt-2"> 
      <DiaryTextbox></DiaryTextbox>
      <ButtonBar></ButtonBar>
    </div>
  )
}

export default DiaryForm
