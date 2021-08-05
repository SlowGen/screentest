export const ADD_SHAPE = 'ADD_SHAPE';
export const UPDATE_SHAPE = 'UPDATE_SHAPE';
export const REMOVE_SHAPE = 'REMOVE_SHAPE';
export const ADD_SELECTED = 'ADD_SELECTED';
export const TOGGLE_SELECTED = 'TOGGLE_SELECTED';

export const createShape = shape => ({
    type: ADD_SHAPE,
    shape
})

export const editShape = shape => ({
    type: UPDATE_SHAPE,
    shape
})

export const deleteShape = shape => ({
    type: REMOVE_SHAPE,
})

export const addSelectedToGroup = shape => ({
    type: ADD_SELECTED,
    shape
})

export const toggleSelected = shape => ({
    type: TOGGLE_SELECTED,
    shape
})
