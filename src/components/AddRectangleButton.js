import React from "react";
import '../css/style.css';

const AddRectangleButton = (props) => {
    const {shapes} = props;
    return (
        <div className="add-square-button">
            <button className='square-button' onClick={() => shapes.addRectangle()}>
                Add Rectangle
            </button>
        </div>
    )
}

export default AddRectangleButton;