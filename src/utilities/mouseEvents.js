import {groupSelected, ungroupSelected, addFirstSelection, } from '../store/selected'
import {selectManyShapes, selectNoShapes, selectOneShape, toggleHoverOff, toggleHoverOn, moveShapes} from '../store/shapes'
import isHit from './isHit';

let isDragging = false;


let position = [null, null];

export const onMouseDown = (e, shapes, selected, dispatch) => {
    isDragging = true;
    const {shiftKey} = e;
    const canvas = document.getElementById('canvas')
    const onCanvas = canvas && canvas.getBoundingClientRect();
    if (onCanvas) {
        position = [parseInt(e.clientX - onCanvas.x), parseInt(e.clientY - onCanvas.y)]
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
            const currentPosition = [parseInt(e.clientX - onCanvas.x), parseInt(e.clientY - onCanvas.y)]
            console.log('position', position)
            console.log('currentPosition', currentPosition)
            if (position[0] === currentPosition[0] && position[1] === currentPosition[1]) {
                dispatch(selectNoShapes())
                dispatch(ungroupSelected())
                dispatch(selectOneShape(hitIndex))
                dispatch(addFirstSelection(hitIndex))
            } else {
                dispatch(moveShapes(currentPosition))
            }
            
        }
    }
}

export const onMouseUp = () => {
    isDragging = false;
}

export const onMouseMove = (e, shapes, selected, dispatch,) => {
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
            const shapeCenter = hitIndex !== -1 ? shapes[hitIndex].type === 'rectangle' ? 
                [shapes[hitIndex].x + shapes[hitIndex].width / 2, shapes[hitIndex].y + shapes[hitIndex].height / 2] :
                [shapes[hitIndex].x, shapes[hitIndex].y] : position
            dispatch(moveShapes(position, shapeCenter))
        }
    } else {
        dispatch(toggleHoverOff())
    }
}
