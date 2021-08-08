import React from "react";
import {useSelector} from "react-redux";
import ShapeCard from './ShapeCard';

const EditArea = () => {
    const selected = useSelector(state => state.selected);


    return (
        <div className="edit-area">
            {selected.map(shape => (
                <div key={shape.id}>
                <ShapeCard shape={shape} />
                </div>
            ))}
        </div>
    )
    
}

export default EditArea;