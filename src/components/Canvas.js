import React, {useRef, useEffect} from 'react'

const Canvas = props => {
    const {shapes} = props;
    const allShapes = shapes.getAllShapes();
    const canvasRef = useRef(null)

    const drawShape = (context, shape) => {
        if (shape.type === 'rect') {
            context.fillStyle = shape.color
            context.beginPath()
            context.fillRect(shape.x, shape.y, shape.width, shape.height)

        }
        else {
            context.fillStyle = shape.color //'#0011ff'
            context.beginPath()
            context.arc(shape.x, shape.y, shape.radius, shape.startAngle, shape.endAngle, shape.direction)  //100, 100, 50, 0, 2 * Math.PI
            context.fill()
        }
    }

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        allShapes.map(shape => drawShape(context, shape))
    }, [allShapes])
    
    
    
    return <canvas ref={canvasRef} {...props} />
}

export default Canvas
