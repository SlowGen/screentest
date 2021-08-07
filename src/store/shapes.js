import rectangle from '../models/rectangle';
import circle from '../models/circle';
import {
    addShape,
    updateShape,
    removeShape,
    oneSelected,
    manySelected,
    noneSelected,
    showHover,
    moveSelected,
    ADD_SHAPE,
    UPDATE_SHAPE,
    REMOVE_SHAPE,
    ONE_SELECTED,
    MANY_SELECTED,
    NONE_SELECTED,
    SHOW_HOVER,
    MOVE_SELECTED,
} from './actions'

const initialState = []

export const createShape = shapeType => (dispatch, getState) => {
    const { shapes } = getState()
    if (shapeType === 'rectangle') {
        const newRect = rectangle()
        newRect.x += shapes.length * 30
        newRect.y += shapes.length * 30
        shapes.push(newRect)
        dispatch(addShape(shapes))
    } else if (shapeType === 'circle') {
        const newCircle = circle()
        newCircle.x += shapes.length * 30
        newCircle.y += shapes.length * 30
        shapes.push(newCircle)
        dispatch(addShape(shapes))
    }
}

export const editShape = (shape, property, newValue) => dispatch => {
    if (shape.type === 'rectangle') {
        switch (property) {
            case 'width':
                dispatch(updateShape(shape.width = newValue));
                break;
            case 'height':
                dispatch(updateShape(shape.height = newValue));
                break;
            case 'color':
                dispatch(updateShape(shape.color = newValue));
                break;
            default:
                break;
        }
    } else {
        switch (property) {
            case 'radius':
                dispatch(updateShape(shape.radius = newValue));
                break;
            case 'color':
                dispatch(updateShape(shape.color = newValue));
                break;
            default:
                break;
        }
    }
}

export const deleteShape = (deletedShape) => (dispatch, getState) => {
    const {shapes} = getState();
    if (shapes.length > 0) {
        dispatch(removeShape(shapes.filter(shape => shape.id !== deletedShape.id)));
    }
}

export const selectOneShape = (index) => (dispatch, getState) => {
    const {shapes} = getState()
    shapes[index].isSelected = true;
    dispatch(oneSelected(shapes))
}

export const selectManyShapes = (index) => (dispatch, getState) => {
    const {shapes} = getState()
    shapes[index].isSelected = true;
    dispatch(manySelected(shapes))
}

export const selectNoShapes = () => (dispatch, getState) => {
    const {shapes} = getState()
    shapes.forEach(shape => shape.isSelected = false)
    dispatch(noneSelected(shapes))
}

export const toggleHoverOn = (index) => (dispatch, getState) => {
    const {shapes} = getState()
    shapes.forEach(shape => shape.isHovered = false)
    shapes[index].isHovered = true;
    dispatch(showHover(shapes))
}

export const toggleHoverOff = () => (dispatch, getState) => {
    const {shapes} = getState()
    shapes.forEach(shape => shape.isHovered = false)
    dispatch(showHover(shapes))
}

export const moveShapes = (mousePosition, shapeCenter) => (dispatch, getState) => {
    const {selected, shapes} = getState()
    const mouseX = mousePosition[0]
    const mouseY = mousePosition[1]
    const delta = [mouseX - shapeCenter[0], mouseY - shapeCenter[1]]
    
    const locationChange = (shape) => {
        if (shape.type === 'rectangle') {
            shape.x = shape.x + (delta[0] / 2)
            shape.y = shape.y + (delta[1] / 2)
        } else {
            shape.x = shape.x + delta[0]
            shape.y = shape.y + delta[1]
        }
    }
    
    selected.forEach(shape => locationChange(shape))
    dispatch(moveSelected(shapes))
}

export const shapes = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SHAPE:
            return [...state]
        case UPDATE_SHAPE:
            return [...state]
        case REMOVE_SHAPE:
            return [...state]
        case ONE_SELECTED:
            return  [...state]
        case MANY_SELECTED:
            return [...state]
        case NONE_SELECTED:
            return [...state]
        case SHOW_HOVER:
            return [...state]
        case MOVE_SELECTED:
            return [...state]
        default:
            return state;
    }
} 