//actions for shapes state
export const ADD_SHAPE = 'ADD_SHAPE';
export const UPDATE_SHAPE = 'UPDATE_SHAPE';
export const REMOVE_SHAPE = 'REMOVE_SHAPE';
export const ONE_SELECTED = 'ONE_SELECTED';
export const MANY_SELECTED = 'MANY_SELECTED';
export const NONE_SELECTED = 'NONE_SELECTED';
export const SHOW_HOVER = 'SHOW_HOVER';
export const MOVE_SELECTED = 'MOVE_SELECTED';

export const addShape = shape => ({
    type: ADD_SHAPE,
    shape
})

export const updateShape = shapes => ({
    type: UPDATE_SHAPE,
    shapes
})

export const removeShape = shapes => ({
    type: REMOVE_SHAPE,
    shapes
})

export const oneSelected = shapes => ({
    type: ONE_SELECTED,
    shapes
})

export const manySelected = shapes => ({
    type: MANY_SELECTED,
    shapes
})

export const noneSelected = shapes => ({
    type: NONE_SELECTED,
    shapes
})

export const showHover = shapes => ({
    type: SHOW_HOVER,
    shapes
})

export const moveSelected = shapes => ({
    type: MOVE_SELECTED,
    shapes
})

// //actions for selected state
// export const ADD_FIRST_SELECTED = 'ADD_FIRST_SELECTED'
// export const ADD_SELECTED_GROUP = 'ADD_SELECTED_GROUP';
// export const CLEAR_SELECTED_GROUP = 'CLEAR_SELECTED_GROUP';


// export const addFirstSelected = selected => ({
//     type: ADD_FIRST_SELECTED,
//     selected
// })

// export const addSelectedGroup = selected => ({
//     type: ADD_SELECTED_GROUP,
//     selected
// })

// export const clearSelectedGroup = (selected) => ({
//     type: 'CLEAR_SELECTED_GROUP',
//     selected
// })
