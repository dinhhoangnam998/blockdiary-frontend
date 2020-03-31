import React from 'react'

function DayDiary({ diary }) {
  return (
    <div>
      <div className="card">
        <div className="card-header" role="tab" id="section1HeaderId">
          <h5 className="mb-0">
            <a data-toggle="collapse" data-parent="#accordianId" href="#section1ContentId" aria-expanded="true" aria-controls="section1ContentId">
              {diary.timestamp}
              </a>
          </h5>
        </div>
        <div id="section1ContentId" className="collapse in" role="tabpanel" aria-labelledby="section1HeaderId">
          <div className="card-body">
            {diary.content}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DayDiary
