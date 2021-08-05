const drawShape = (context, shape) => {
    if (shape.type === 'rectangle') {
        context.fillStyle = shape.color
        context.beginPath()
        context.fillRect(shape.x, shape.y, shape.width, shape.height)

    }
    else {
        context.fillStyle = shape.color
        context.beginPath()
        context.arc(shape.x, shape.y, shape.radius, shape.start, shape.end)
        context.fill()
    }
}

export default drawShape