import React from 'react'
import DiaryTextbox from './DiaryTextbox'
import ButtonBar from './ButtonBar';

function DiaryForm() {
  return (
    <div className="mt-2">
      <form>
        <DiaryTextbox></DiaryTextbox>
        <ButtonBar></ButtonBar>
      </form>
    </div>
  )
}

export default DiaryForm
