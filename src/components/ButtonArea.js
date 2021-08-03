import React from 'react'
import AddCircleButton from './AddCircleButton'
import AddSquareButton from './AddSquareButton'

import '../css/style.css';

const ButtonArea = (props) => {
    const {shapes} = props;
    return(
        <div className="button-area">
            <AddCircleButton addCircle={shapes.addCircle} />
            <AddSquareButton addSquare={shapes.addSquare} />
        </div>
    )
}

export default ButtonArea