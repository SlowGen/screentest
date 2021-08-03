import React from 'react';

const ShapeCard = (props) => {
    const {shape} = props;
    return(
        <div className="shape-card">
            {shape.name}
        </div>
    )
}

export default ShapeCard;