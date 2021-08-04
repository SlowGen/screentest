import React from "react";
import '../css/style.css';


const AddCircleButton = (props) => {
    const {shapes} = props;
    return (
        <div className="add-circle-button">
            <button className='circle-button' onClick={() => shapes.addCircle()}>Add Cicle</button>
        </div>
    )
}

export default AddCircleButton;