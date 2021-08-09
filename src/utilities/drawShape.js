const drawShape = (context, shape) => {
  const selectedColor = "rgba(238, 228, 50, 0.88)";
  const hoveredColor = "rgba(0, 0, 250, 0.45)";
  const whiteColor = "rgba(250, 250, 250, 1)";
  
  if (shape.type === "rectangle") {
    context.fillStyle = shape.color;
    context.beginPath();
    context.fillRect(shape.x, shape.y, shape.width, shape.height);
    
    if (shape.isSelected) {
      context.strokeStyle = selectedColor;
      context.lineWidth = 10;
      context.strokeRect(shape.x, shape.y, shape.width, shape.height);
      context.strokeStyle = whiteColor;
      context.lineWidth = 5;
      context.strokeRect(shape.x, shape.y, shape.width, shape.height);
    }
    
    if (shape.isHovered) {
      context.strokeStyle = hoveredColor;
      context.lineWidth = 10;
      context.strokeRect(shape.x, shape.y, shape.width, shape.height);
    }
  
} else {
    context.fillStyle = shape.color;
    context.beginPath();
    context.arc(shape.x, shape.y, shape.radius, shape.start, shape.end);
    context.fill();
    
    if (shape.isSelected) {
      context.strokeStyle = selectedColor;
      context.lineWidth = 10;
      context.stroke();
      context.strokeStyle = whiteColor;
      context.lineWidth = 5;
      context.stroke();
    }
    
    if (shape.isHovered) {
      context.strokeStyle = hoveredColor;
      context.lineWidth = 10;
      context.stroke();
    }
  }
};

export default drawShape;
