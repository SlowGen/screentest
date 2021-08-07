// import {moveShapes} from '../store/selected'

// const onMouseDown = (e, selected, dispatch) => {
//     const canvas = document.getElementById('canvas')
//     const onCanvas = canvas && canvas.getBoundingClientRect();
//     console.log('mouse is down')
//     if (onCanvas) {
//         const startingPosition = [parseInt(e.clientX - onCanvas.x), parseInt(e.clientY - onCanvas.y)]
//         if (selected.length) {
//             dispatch(moveShapes(startingPosition))
//         }
        
//     }
// }

// export default onMouseDown