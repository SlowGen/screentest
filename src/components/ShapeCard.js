import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteShape} from '../store/shapes';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone'

const ShapeCard = (props) => {
    const {shape} = props;

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(deleteShape(shape));
    }

    // const handleChange = (e) => {}

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
                    {shape.type === 'rectangle' ? <div>Width</div> : <div>Radius</div>}
                </div>
                <div>
                    {shape.type === 'rectangle' ? Math.round(shape.width) : Math.round(shape.radius)}
                </div>
            </div>
            <div className="shape-card-row">
                <div>
                    {shape.type === 'rectangle' && <div>Height</div>}
                </div>
                <div>
                    {shape.type === 'rectangle' && Math.round(shape.height)}
                </div>
            </div>
            <div className="shape-card-row">
                <div>
                    Color
                </div>
                <div>
                    Colorpicker box
                </div>
            </div>
        </div>
    )
}

export default ShapeCard;