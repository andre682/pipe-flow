import React from 'react'
import BoardRow from './BoardRow.jsx'

export default (props) => {
  const { rows, columns } = props 
  return (
  <div className="col-12">
    {new Array(rows).fill('').map((_, row) => (
      <BoardRow row={row} cells={columns}/>
    ))}
  </div>
)}
