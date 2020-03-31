import React from 'react'

function Timer() {
  return (
    <div className="text-monospace">
      <div>Today: {new Date().toDateString()}</div>
    </div>
  )
}

export default Timer
