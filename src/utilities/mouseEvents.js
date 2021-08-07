import {groupSelected, ungroupSelected, addFirstSelection, moveShapes} from '../store/selected'
import {selectManyShapes, selectNoShapes, selectOneShape, toggleHoverOff, toggleHoverOn} from '../store/shapes'
import isHit from './isHit';

let isDragging = false;

export const onMouseDown = (e, shapes, selected, dispatch) => {
    isDragging = true;
    const {shiftKey} = e;
    const canvas = document.getElementById('canvas')
    const onCanvas = canvas && canvas.getBoundingClientRect();
    if (onCanvas) {
        const position = [parseInt(e.clientX - onCanvas.x), parseInt(e.clientY - onCanvas.y)]
        const hitIndex = shapes.reverse().findIndex(shape => isHit(shape, position[0], position[1]));
        //reverse is used to select the shape on top of a pile of shapes when many are added without moving
        //ideally, this could be reordered so that the selected shape always moves to the top
        //a feature for the future
        if (hitIndex === -1) {
            dispatch(selectNoShapes())
            dispatch(ungroupSelected())
        } else if (shiftKey && selected.length > 0) {
            dispatch(selectManyShapes(hitIndex))
            dispatch(groupSelected(hitIndex))
        } else {
            dispatch(selectOneShape(hitIndex))
            dispatch(addFirstSelection(hitIndex))
        }
    }
}

export const onMouseUp = () => {
    isDragging = false;
}

export const onMouseMove = (e, shapes, dispatch) => {
    const canvas = document.getElementById('canvas')
    const onCanvas = canvas && canvas.getBoundingClientRect()
    if (onCanvas) {
        const position = [parseInt(e.clientX - onCanvas.x), parseInt(e.clientY - onCanvas.y)]
        const hitIndex = shapes.reverse().findIndex(shape => isHit(shape, position[0], position[1]));
        if (!isDragging) {
            if (hitIndex === -1) {
                dispatch(toggleHoverOff())
            } else {
                dispatch(toggleHoverOff())
                dispatch(toggleHoverOn(hitIndex))
            }
        } else {
            dispatch(moveShapes(position))
            console.log(shapes)
        }
    } else {
        dispatch(toggleHoverOff())
    }
}
