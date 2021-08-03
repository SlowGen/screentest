import React from "react";
import '../css/style.css';

const AddSquareButton = (addSquare) => {
    return (
        <div className="add-square-button">
            <button className='square-button' onClick={addSquare}>
                Add Square
            </button>
        </div>
    )
}

export default AddSquareButton;