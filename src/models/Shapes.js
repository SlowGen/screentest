const Shapes = function() {
    this.allShapes = [];
}

const Circle = function(index) {
    this.index = index;
    this.color = '#0044ff';
    this.x = 25;
    this.y = 25;
    this.radius = 25;
}

const Rectangle = function(index) {
    this.index = index;
    this.color = '#ff0044';
    this.x = 50;
    this.y = 50;
    this.width = 100;
    this.height = 100;
}

Shapes.prototype.addCircle = function() {
    this.allShapes.push(new Circle(this.allShapes.length));
}

Shapes.prototype.addRectangle = function() {
    this.allShapes.push(new Rectangle(this.allShapes.length));
}

Shapes.prototype.getAllShapes = function() {
    return this.allShapes;
}



export default Shapes;