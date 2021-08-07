const drawShape = (context, shape) => {
    const selectedColor = '#f5e042'
    const hoveredColor = '#7732a8'
    if (shape.type === 'rectangle') {
        context.fillStyle = shape.color
        context.beginPath()
        context.fillRect(shape.x, shape.y, shape.width, shape.height)
        if (shape.isSelected) {
            context.strokeStyle = selectedColor
            context.lineWidth = 10
            context.strokeRect(shape.x, shape.y, shape.width, shape.height)
        }
        if (shape.isHovered) {
            context.strokeStyle = hoveredColor
            context.lineWidth = 5
            context.strokeRect(shape.x, shape.y, shape.width, shape.height)
        }
    }
    else {
        context.fillStyle = shape.color
        context.beginPath()
        context.arc(shape.x, shape.y, shape.radius, shape.start, shape.end)
        context.fill()
        if (shape.isSelected) {
            context.strokeStyle = selectedColor
            context.lineWidth = 10
            context.stroke()
        }
        if (shape.isHovered) {
            context.strokeStyle = hoveredColor
            context.lineWidth = 5
            context.stroke()
        }
    }
}

export default drawShape