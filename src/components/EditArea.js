import React from "react";
import {useSelector} from "react-redux";
import ShapeCard from './ShapeCard';

const EditArea = () => {
    const shapes = useSelector(state => state.shapes);
    const selected = shapes.filter(shape => shape.isSelected);

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