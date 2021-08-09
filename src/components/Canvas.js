import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  drawShape,
  onClick,
  onMouseMove,
  onMouseDown,
  onMouseUp,
} from "../utilities";

const Canvas = (props) => {
  const canvasRef = useRef(null);
  const shapes = useSelector((state) => state.shapes);
  const dispatch = useDispatch();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    
    context.clearRect(0, 0, canvas.width, canvas.height);   //provides a clean slate for each render
    shapes.forEach((shape) => drawShape(context, shape));
  });

  return (
    <canvas
      id="canvas"
      ref={canvasRef}
      height={500}
      width={500}
      onClick={(e) => onClick(e, shapes, dispatch)}
      onMouseMove={(e) => onMouseMove(e, shapes, dispatch)}
      onMouseDown={(e) => onMouseDown(e, shapes, dispatch)}
      onMouseUp={(e) => onMouseUp(e, shapes, dispatch)}
      {...props}
    />
  );
};

export default Canvas;
