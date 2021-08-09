import {selectManyShapes, selectNoShapes, selectOneShape, toggleHoverOff, toggleHoverOn, moveShapes} from '../store/shapes'
import isHit from './isHit';

let canDrag = false;
let didMove = false;
let activeSelection = null;

export const onClick = (e, shapes, dispatch) => {
    const {shiftKey} = e;
    const canvas = document.getElementById('canvas')
    const onCanvas = canvas && canvas.getBoundingClientRect();
    if (onCanvas) {
        const position = [parseInt(e.clientX - onCanvas.x), parseInt(e.clientY - onCanvas.y)]
        const hitIndex = shapes.findIndex(shape => isHit(shape, position[0], position[1]));
        if (hitIndex === -1) {
            dispatch(selectNoShapes())
        } else if (shiftKey) {
            dispatch(selectManyShapes(hitIndex))
        } else if (!didMove) {
            dispatch(selectOneShape(hitIndex))
        }
    }
    didMove = false;
}

export const onMouseDown = (e, shapes, dispatch) => {
    canDrag = true;
    const canvas = document.getElementById('canvas')
    const onCanvas = canvas && canvas.getBoundingClientRect();
    if (onCanvas) {
        const position = [parseInt(e.clientX - onCanvas.x), parseInt(e.clientY - onCanvas.y)]
        const hitIndex = shapes.findIndex(shape => isHit(shape, position[0], position[1]));
        activeSelection = shapes[hitIndex];
    }
}

export const onMouseUp = () => {
    canDrag = false;
    activeSelection = null;
}

export const onMouseMove = (e, shapes, dispatch,) => {
    const canvas = document.getElementById('canvas')
    const onCanvas = canvas && canvas.getBoundingClientRect()
    if (onCanvas) {
        const position = [parseInt(e.clientX - onCanvas.x), parseInt(e.clientY - onCanvas.y)]
        const hitIndex = shapes.findIndex(shape => isHit(shape, position[0], position[1]));
        if (!canDrag) {
            if (hitIndex === -1) {
                dispatch(toggleHoverOff())
            } else {
                dispatch(toggleHoverOff())
                dispatch(toggleHoverOn(hitIndex))
            }
        } else {
            const shapeCenter = activeSelection.type === 'rectangle' ? 
            [activeSelection.x + activeSelection.width / 2, activeSelection.y + activeSelection.height / 2] :
            [activeSelection.x, activeSelection.y]
            const selected = shapes.filter(shape => shape.isSelected);

            if (!selected.includes(shapes[hitIndex])) dispatch(selectNoShapes())

            dispatch(moveShapes(position, shapeCenter, activeSelection))
            didMove = true;
        }
    } else {
        dispatch(toggleHoverOff())
    }
}
