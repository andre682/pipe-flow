import React from 'react'
import Slot from '../container/Slot'

export default props => {
  const { row, cell } = props
  return (
    <div className="cell" key={`column-${row}-${cell}`}>
      <Slot />
    </div>
  )
}
