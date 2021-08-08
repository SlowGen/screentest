import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {deleteShape, editShape} from '../store/shapes';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone'

const ShapeCard = (props) => {
    const {shape} = props;
    const dispatch = useDispatch();

    const [width, setWidth] = useState(Math.round(shape.width));
    const [height, setHeight] = useState(Math.round(shape.height));
    const [radius, setRadius] = useState(Math.round(shape.radius));
    const [color, setColor] = useState(shape.color);

    console.log('width', width)

    const handleClick = () => {
        dispatch(deleteShape(shape));
    }

    const handleWidthChange = (e) => {
        setWidth(Math.round(e.target.value));
        dispatch(editShape(shape, 'width', width))
    }

    const handleHeightChange = (e) => {
        setHeight(Math.round(e.target.value));
        dispatch(editShape(shape, 'height', height))
    }

    const handleRadiusChange = (e) => {
        setRadius(Math.round(e.target.value));
        dispatch(editShape(shape, 'radius', radius))
    }

    const handleColorChange = (e) => {
        setColor(e.target.value);
        dispatch(editShape(shape, 'color', color))
    }

    return(
        <div className="shape-card">
            <div className="shape-card-row">
                <button className="button" onClick={handleClick} label='Delete'>
                    <DeleteTwoToneIcon />
                </button>
                <div alignself="center">
                   {shape.type === 'rectangle' ? <div>Rectangle</div> : <div>Circle</div>}
                </div>
            </div>
            <div className="shape-card-row">
            </div>
            <div className="shape-card-row">
                <div>
                    Center X:
                </div>
                <div>
                    {shape.type === 'rectangle' ? Math.round(shape.x + shape.width/2) : Math.round(shape.x)}
                </div>
            </div>
            <div className="shape-card-row">
                <div>
                    Center Y:
                </div>
                <div>
                    {shape.type === 'rectangle' ? Math.round(shape.y + shape.height/2) : Math.round(shape.y)}
                </div>
            </div>
            <div className="shape-card-row">
                <div>
                    {shape.type === 'rectangle' ? 
                    (
                        <label htmlFor="width">Width:</label>
                    ) : ( 
                        <label htmlFor="radius">Radius:</label>
                    )}
                </div>
                <div>
                    {shape.type === 'rectangle' ?  
                        (
                            <input type="range" id="width" name="width" 
                            min={0} max={500} value={width} 
                            onChange={handleWidthChange} />
                        ) : (
                            <input type="range" id="radius" name="radius"
                            min={0} max={250} value={radius}
                            onChange={handleRadiusChange} />
                        )
                }
                </div>
            </div>
            <div className="shape-card-row">
                <div>
                    {shape.type === 'rectangle' && <label htmlFor="height">Height:</label>}
                </div>
                <div>
                    {shape.type === 'rectangle' && 
                        <input type="range" id="height" name="height"
                        min={0} max={500} value={height}
                        onChange={handleHeightChange} />
                    }
                </div>
            </div>
            <div className="shape-card-row">
                <div>
                    <label htmlFor="color">Color:</label>
                </div>
                <div>
                    <input type="color" id='color' name='color'
                    value={color}
                    onChange={handleColorChange} />
                </div>
            </div>
        </div>
    )
}

export default ShapeCard;