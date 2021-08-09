const isHit = (shape, x, y) => {
  
    if (shape.type === "rectangle") {
    return (
      x >= shape.x &&
      x <= shape.x + shape.width &&
      y >= shape.y &&
      y <= shape.y + shape.height
    );
  
} else if (shape.type === "circle") {
    return (
      x - shape.x <= shape.radius &&
      x - shape.x >= -shape.radius &&
      y - shape.y <= shape.radius &&
      y - shape.y >= -shape.radius
    );
  }
};

export default isHit;
