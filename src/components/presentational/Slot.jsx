import React from 'react'
import { useDrop } from 'react-dnd'

export default () => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'pipe',
    drop: () => {
      console.log('DROP')
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
