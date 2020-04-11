import React from 'react'
import Slot from './Slot.jsx'

export default () => {
  const [X, Y] = [15, 10]
  return (
    <div className="col-12">
      {new Array(Y).fill('').map((j, k) => (
        <div className="row" key={j}>{
            new Array(X).fill('').map((i, n) => 
            <div className="cell" key={n}>
                <Slot/>
            </div>
            )}</div>
      ))}
    </div>
  )
}
