const Circle = function(index) {
    this.index = index;
    this.type = 'circle';
    this.color = '#0044ff';
    this.x = 25;
    this.y = 25;
    this.radius = 25;
}

Circle.prototype.editXY = function(x, y) {
    this.x = x;
    this.y = y;
}

Circle.prototype.editRadius = function(radius) {
    this.radius = radius;
}

Circle.prototype.editColor = function(color) {
    this.color = color;
}

export default Circle;