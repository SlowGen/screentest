import React, {useRef, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {drawShape, onClick, onMouseMove, onMouseDown, onMouseUp} from '../utilities'

const Canvas = props => {
    const canvasRef = useRef(null)
    const shapes = useSelector(state => state.shapes)
    const dispatch = useDispatch()

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        shapes.forEach(shape => drawShape(context, shape))
    })
    
    return <canvas 
        ref={canvasRef} 
        height={500} 
        width={500} 
        onClick={(e) => onClick(e, canvasRef, dispatch)}
        onMouseMove={onMouseMove}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        {...props} />
}

export default Canvas
