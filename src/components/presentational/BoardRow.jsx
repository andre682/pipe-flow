import React from 'react'
import BoardCell from './BoardCell.jsx'

export default (props) => {
    const {row, cells} = props
    return (
  <div className="row" key={`row-${row}`}>
    {new Array(cells).fill('').map((i, cell) => (
      <BoardCell cell={cell} row={row} />
    ))}
  </div>
)}
