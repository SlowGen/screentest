import React, {useEffect} from "react";
import ShapeCard from './ShapeCard';

const EditArea = (props) => {
    const {shapes} = props;
    const allShapes = shapes.getAllShapes();

    useEffect(() => {
    })

    return (
        <div className="edit-area">
            {allShapes.map(shape => (
                <div>
                <ShapeCard key={shape.index} shape={shape} />
                </div>
            ))}
        </div>
    )
    
}

export default EditArea;