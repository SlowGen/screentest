import rectangle from '../models/rectangle';
import circle from '../models/circle';
import {
    createShape,
    editShape,
    deleteShape,
    ADD_SHAPE,
    UPDATE_SHAPE,
    REMOVE_SHAPE,
} from './actions'


const initialState = []

export const addShape = shape => dispatch => {
    if (shape === 'rectangle')
        dispatch(createShape(rectangle))
    else if (shape === 'circle')
        dispatch(createShape(circle))
}

export const moveShape = () => {}

export const updateShape = (shape, property, newValue) => dispatch => {
    if (shape.type === 'rectangle') {
        switch (property) {
            case 'width':
                dispatch(editShape(shape.width = newValue));
                break;
            case 'height':
                dispatch(editShape(shape.height = newValue));
                break;
            case 'color':
                dispatch(editShape(shape.color = newValue));
                break;
            default:
                break;
        }
    } else {
        switch (property) {
            case 'radius':
                dispatch(editShape(shape.radius = newValue));
                break;
            case 'color':
                dispatch(editShape(shape.color = newValue));
                break;
            default:
                break;
        }
    }
}

export const removeShape = (state = initialState, deletedShape) => dispatch => {
    dispatch(deleteShape(state.filter(shape => shape.id !== deletedShape.id)));
}

export const shapes = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SHAPE:
            action.shape.x = action.shape.x + 10;
            action.shape.y = action.shape.y + 10;
            return [...state, action.shape]
        case UPDATE_SHAPE:
            return action.shape
        case REMOVE_SHAPE:
            return action.shape
        default:
            return state;
    }
}