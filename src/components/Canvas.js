import React, {useRef, useEffect} from 'react'
import {useSelector} from 'react-redux'

const Canvas = props => {
    const canvasRef = useRef(null)
    // const dispatch = useDispatch()
    const shapes = useSelector(state => state.shapes)

    const drawShape = (context, shape) => {
        if (shape.type === 'rectangle') {
            context.fillStyle = shape.color
            context.beginPath()
            context.fillRect(shape.x, shape.y, shape.width, shape.height)

        }
        else {
            console.log('hit circle')
            context.fillStyle = shape.color
            context.beginPath()
            context.arc(shape.x, shape.y, shape.radius, shape.startAngle, shape.endAngle, shape.direction = true)
            context.fill()
        }
    }

    useEffect(() => {
        console.log('shapes-state', shapes)
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        shapes.forEach(shape => drawShape(context, shape))
    })
    
    return <canvas ref={canvasRef} height={500} width={500} {...props} />
}

export default Canvas
