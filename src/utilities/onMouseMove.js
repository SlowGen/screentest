import {toggleHoverOn, toggleHoverOff} from '../store/shapes'
import isHit from './isHit'

const onMouseMove = (e, shapes, dispatch) => {
    console.log('e', e)
    const canvas = document.getElementById('canvas')
    const onCanvas = canvas && canvas.getBoundingClientRect()
    if (onCanvas) {
        const position = [parseInt(e.clientX - onCanvas.x), parseInt(e.clientY - onCanvas.y)]
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