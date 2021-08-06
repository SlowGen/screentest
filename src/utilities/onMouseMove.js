import {toggleHoverOn, toggleHoverOff} from '../store/shapes'
import isHit from './isHit'

const onMouseMove = (e, shapes, dispatch) => {
    const canvas = document.getElementById('canvas')
    const selectedShape = canvas && canvas.getBoundingClientRect()
    if (selectedShape) {
        const position = [parseInt(e.clientX - selectedShape.x), parseInt(e.clientY - selectedShape.y)]
        const hitIndex = shapes.reverse().findIndex(shape => isHit(shape, position[0], position[1]));
        if (hitIndex === -1) {
            dispatch(toggleHoverOff())
        } else {
            console.log('hitting a target!')
            dispatch(toggleHoverOff())
            dispatch(toggleHoverOn(hitIndex))
        }
    } else {
        dispatch(toggleHoverOff())
    }
}

export default onMouseMove