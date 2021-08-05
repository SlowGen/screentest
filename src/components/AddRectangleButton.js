import React from "react";
import {useDispatch} from 'react-redux';
import {addShape} from '../store/shapes';
import '../css/style.css';

const AddRectangleButton = (props) => {
    const dispatch = useDispatch();

    const addRectangle = () => {
        dispatch(addShape('rectangle'))
    }
    return (
        <div className="add-square-button">
            <button className='square-button' onClick={() => addRectangle()}>
                Add Rectangle
            </button>
        </div>
    )
}

export default AddRectangleButton;