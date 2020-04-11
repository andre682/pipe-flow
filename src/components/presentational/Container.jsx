import React from 'react'
import ToolBox from './ToolBox.jsx'
import PipeBoard from './PipeBoard.jsx'

export default () => {
  return (
    <div>
      <div className="row">
        <div className="col-1 console">
          <ToolBox />
        </div>
        <div className="col-11 console">
          <PipeBoard />
        </div>
      </div>
    </div>
  )
}
