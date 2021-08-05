import {addSelectedToGroup, toggleSelected} from '../store/actions'

const onClick = (e, canvasRef, dispatch) => {
    console.log(e)
    const context = canvasRef.getContext('2d');
    const {shiftKey} = e;
    const canvas = document.getElementById('canvas')
    const selectedShape = canvas && canvas.getBoundingClientRect();
    if (selectedShape) {
        const position = [parseInt(e.clientX - canvas.x), parseInt(e.clientY - canvas.y)]
        if (shiftKey) {
            dispatch(addSelectedToGroup(context, position))
        } else {
            dispatch(toggleSelected(context, position))
        }
    }
}

export default onClick