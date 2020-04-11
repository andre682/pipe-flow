import React from 'react'
import { useDrag } from 'react-dnd'

export default () => {

    const [collectedProps, drag] = useDrag({
        item:{type, id}
    })
    
    return <div ref={drag}>...</div>
}