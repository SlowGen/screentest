import { v4 as uuid } from "uuid";

const circle = () => ({
  id: uuid(),   //used solely for mapping ShapeCards
  isSelected: false,
  isHovered: false,
  type: "circle",
  color: "#0044ff",
  x: 25,
  y: 25,
  radius: 25,
  start: 0,
  end: Math.PI * 2,
});

export default circle;
