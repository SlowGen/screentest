import React from "react";
import AddCircleButton from "./AddCircleButton";
import AddRectangleButton from "./AddRectangleButton";

import "../css/style.css";

const ButtonArea = () => {
  return (
    <div className="button-area">
      <AddCircleButton />
      <AddRectangleButton />
    </div>
  );
};

export default ButtonArea;
