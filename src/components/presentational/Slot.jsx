import React from 'react'
import { useDrop } from 'react-dnd'

export default props => {
  const { row, cell } = props
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'pipe',
    drop: () => {
      props.handleDrop({ row: row, column: cell, tool: 1 })
    },
    hover: () => {
      props.handleHover()
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  })

  return (
    <div className="slot" ref={drop}>
      {isOver ? 'over' : 'notOver'}
      {canDrop ? 'drop' : 'notDrop'}
    </div>
  )
}
