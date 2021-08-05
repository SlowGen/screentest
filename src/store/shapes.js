// import shapesInstance from './index';
import rectangle from '../models/rectangle';
import circle from '../models/circle';

const ADD_SHAPE = 'ADD_SHAPE';
const UPDATE_SHAPE = 'UPDATE_SHAPE';
const REMOVE_SHAPE = 'REMOVE_SHAPE';

const initialState = []

const createShape = shape => ({
    type: ADD_SHAPE,
    shape
})

const editShape = shape => ({
    type: UPDATE_SHAPE,
    shape
})

const deleteShape = shape => ({
    type: REMOVE_SHAPE,
})

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
    dispatch(deleteShape(state.filter(shape => shape.id === deletedShape.id)));
}

export default function shapes(state = initialState, action) {
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