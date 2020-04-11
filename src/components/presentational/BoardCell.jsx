import React from 'react'
import Slot from './Slot.jsx'

export default props => {
  const { row, cell } = props
  return (
    <div className="cell" key={`column-${row}-${cell}`}>
      <Slot />
    </div>
  )
}
