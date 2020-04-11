import React from 'react'
import { useDrag } from 'react-dnd'

export default () => {

    const [collectedProps, drag] = useDrag({
        item:{type:'pipe'},
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    })
    
    return <div ref={drag}>
        <img className="tool-item" src="https://www.aertecnica.fi/WebRoot/vilkasfi02/Shops/2016042602/Categories/Category3/SubCategory1/B030-120_m.png" alt=""/>
    </div>
}