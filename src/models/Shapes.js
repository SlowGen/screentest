import Circle from './Circle'
import Rectangle from './Rectangle'

const Shapes = function() {
    this.allShapes = [];
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

Shapes.prototype.getOneShape = function(index) {
    if (index < this.allShapes.length) {
        return this.allShapes[index];
    } else {
        return null;
    }
}

Shapes.prototype.removeShape = function(index) {
    if (index < this.allShapes.length) {
        this.allShapes.splice(index, 1);
    }
}

export default Shapes;