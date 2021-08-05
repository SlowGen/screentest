import shapesInstance from './index';

const GET_SHAPE = 'GET_SHAPE';
const ADD_SHAPE = 'ADD_SHAPE';
const UPDATE_SHAPE = 'UPDATE_SHAPE';
const REMOVE_SHAPE = 'REMOVE_SHAPE';

const initialState = {}

const setShape = shape => ({
    type: GET_SHAPE,
    shape
})

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

export const getShape = index => dispatch => {
    dispatch(setShape(shapesInstance.getOneShape(index)));
}

export const addShape = shape => dispatch => {
    if (shape === 'rect')
        dispatch(createShape(shapesInstance.addRectangle()))
    else {
        dispatch(createShape(shapesInstance.addCircle()))
    }
}

export const updateShape = (index, property, newValue) => dispatch => {
    const shape = shapesInstance.getOneShape(index);
    if (shape.type === 'rect') {
        switch (property) {
            case 'xy':
                dispatch(editShape(shape.editXY(newValue)));
                break;
            case 'width':
                dispatch(editShape(shape.editWidth(newValue)));
                break;
            case 'height':
                dispatch(editShape(shape.editHeight(newValue)));
                break;
            case 'color':
                dispatch(editShape(shape.editColor(newValue)));
                break;
            default:
                break;
        }
    } else {
        switch (property) {
            case 'xy':
                dispatch(editShape(shape.editXY(newValue)));
                break;
            case 'radius':
                dispatch(editShape(shape.editRadius(newValue)));
                break;
            case 'color':
                dispatch(editShape(shape.editColor(newValue)));
                break;
            default:
                break;
        }
    }
}

export const removeShape = index => dispatch => {
    dispatch(deleteShape(shapesInstance.removeShape(index)));
}

export default function shape(state = initialState, action) {
    switch (action.type) {
        case GET_SHAPE:
            return action.shape
        case ADD_SHAPE:
            return action.shape
        case UPDATE_SHAPE:
            return action.shape
        case REMOVE_SHAPE:
            return action.shape
        default:
            return state;
    }
}