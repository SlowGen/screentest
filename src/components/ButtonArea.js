import React from 'react'
import AddCircleButton from './AddCircleButton'
import AddRectangleButton from './AddRectangleButton'

import '../css/style.css';

const ButtonArea = (props) => {
    const {shapes} = props;
    return(
        <div className="button-area">
            <AddCircleButton addCircle={shapes.addCircle} />
            <AddRectangleButton addSquare={shapes.addSquare} />
        </div>
    )
}

export default ButtonArea