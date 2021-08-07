import {
    addFirstSelected,
    addSelectedGroup,
    clearSelectedGroup,
    moveSelected,
    ADD_FIRST_SELECTED,
    ADD_SELECTED_GROUP,
    CLEAR_SELECTED_GROUP,
    MOVE_SELECTED,
} from './actions'

const initialState = [];

export const addFirstSelection = index => (dispatch, getState) => {
    const shapes = getState().shapes;
    const selection = shapes[index]
    dispatch(addFirstSelected(selection));
}

export const groupSelected = index => (dispatch, getState) => {
    const shapes = getState().shapes;
    const selection = shapes[index]
    dispatch(addSelectedGroup(selection));
}

export const ungroupSelected = () => dispatch => {
    dispatch(clearSelectedGroup([]));
}

export const moveShapes = (startingPosition) => (dispatch, getState) => {
    const {selected} = getState()
    selected.forEach(shape => shape.x = shape.x + startingPosition[0])
    selected.forEach(shape => shape.y = shape.y + startingPosition[1])
    dispatch(moveSelected(selected))
}

export const selected = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FIRST_SELECTED:
            return [action.selected];
        case ADD_SELECTED_GROUP:
            return [...state, action.selected];
        case CLEAR_SELECTED_GROUP:
            return action.selected;
        case MOVE_SELECTED:
            return [...state]
        default:
            return state;
    }
}
