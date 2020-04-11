import React from 'react'
import BoardRow from './BoardRow.jsx'

export default (props) => {
  const { state } = props
  const [ rows, columns ] = state.slots
  return (
  <div className="col-12">
    {new Array(rows).fill('').map((_, row) => (
      <BoardRow row={row} cells={columns}/>
    ))}
  </div>
)}
