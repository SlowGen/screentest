import { v4 as uuid } from "uuid";

const rectangle = () => ({
  id: uuid(),   //used solely for mapping ShapeCards
  isSelected: false,
  isHovered: false,
  type: "rectangle",
  color: "#ff0044",
  x: 50,
  y: 50,
  width: 100,
  height: 100,
});

export default rectangle;
