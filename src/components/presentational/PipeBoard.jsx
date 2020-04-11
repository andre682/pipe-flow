import React from 'react'
import Slot from './Slot.jsx'


export default () => {
  const [X, Y] = [15, 10]
  return (
    <div className="col-12">
      {new Array(Y).fill('').map((j, row) => (
        <div className="row" key={`row-${row}`}>{
            new Array(X).fill('').map((i, column) => 
            <div className="cell" key={`column-${column}`}>
                <Slot/>
            </div>
            )}</div>
      ))}
    </div>
  )
}
