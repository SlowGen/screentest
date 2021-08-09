import React from "react";
import { useDispatch } from "react-redux";
import { createShape } from "../store/shapes";

import "../css/style.css";

const AddRectangleButton = () => {
  const dispatch = useDispatch();

  const addRectangle = () => {
    dispatch(createShape("rectangle"));
  };

  return (
    <div className="add-square-button">
      <button className="square-button" onClick={() => addRectangle()}>
        Add Rectangle
      </button>
    </div>
  );
};

export default AddRectangleButton;
