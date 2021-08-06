import {groupSelected, ungroupSelected, addFirstSelection} from '../store/selected'
import {selectManyShapes, selectNoShapes, selectOneShape} from '../store/shapes'
import isHit from './isHit';

const onClick = (e, shapes, selected, dispatch) => {
    const {shiftKey} = e;
    const canvas = document.getElementById('canvas')
    const selectedShape = canvas && canvas.getBoundingClientRect();
    if (selectedShape) {
        const position = [parseInt(e.clientX - selectedShape.x), parseInt(e.clientY - selectedShape.y)]
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

export default onClick