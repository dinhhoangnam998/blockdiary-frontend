import React from 'react'


function DiaryTextbox() {
  return (
    <div>
      <form>
        <div className="form-group mb-1">
          <textarea className="form-control" name="diary" id="diary" rows="8" placeholder="Write your diary...."></textarea>
        </div>
      </form>
    </div>
  )
}

export default DiaryTextbox
