import React from "react";
import { useDispatch } from "react-redux";
import { createShape } from "../store/shapes";

import "../css/style.css";

const AddCircleButton = () => {
  const dispatch = useDispatch();

  const addCircle = () => {
    dispatch(createShape("circle"));
  };

  return (
    <div className="add-circle-button">
      <button className="circle-button" onClick={() => addCircle()}>
        Add Circle
      </button>
    </div>
  );
};

export default AddCircleButton;
