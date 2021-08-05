import React from "react";
import {useDispatch} from "react-redux";
import {addShape} from '../store/shapes'
import '../css/style.css';


const AddCircleButton = () => {
    const dispatch = useDispatch();

    const addCircle = () => {
        dispatch(addShape('circle'))
    }
    return (
        <div className="add-circle-button">
            <button className='circle-button' onClick={() => addCircle()}>
                Add Cicle
            </button>
        </div>
    )
}

export default AddCircleButton;