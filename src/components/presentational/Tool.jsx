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
        <img className="tool-item" src="https://i1.pngguru.com/preview/931/15/721/spring-white-and-gray-pigeon-png-clipart.jpg" alt=""/>
    </div>
}