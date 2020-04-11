import React from 'react'
import ToolBox from './ToolBox.jsx'
import PipeBoard from './PipeBoard.jsx'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

export default () => {
  return (
    <div>
      <DndProvider backend={Backend}>
        <div className="row">
          <div className="col-1 console">
            <ToolBox />
          </div>
          <div className="col-11 console">
            <PipeBoard />
          </div>
        </div>
      </DndProvider>
    </div>
  )
}
