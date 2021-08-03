import React from "react";
import '../css/style.css';

import Shapes from "../models/Shapes";

const AddCircleButton = (addCircle) => {
    return (
        <div className="add-circle-button">
            <button className='circle-button' onClick={addCircle}>Add Cicle</button>
        </div>
    )
}

export default AddCircleButton;