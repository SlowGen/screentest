import shapesInstance from './index'

const GET_SHAPES = 'GET_SHAPES'


const initialState = []

const setAllShapes = shapes => ({
    type: GET_SHAPES,
    shapes
})

export const getAllShapes = () => dispatch => {
    dispatch(setAllShapes(shapesInstance.getAllShapes()))
}

export default function shapes(state = initialState, action) {
    switch (action.type) {
        case GET_SHAPES:
            return [...action.shapes]
        
        default:
            return state
    }
}