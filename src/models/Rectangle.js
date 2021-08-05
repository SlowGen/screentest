const Rectangle = function(index) {
    this.index = index;
    this.type = 'rectangle'
    this.color = '#ff0044';
    this.x = 50;
    this.y = 50;
    this.width = 100;
    this.height = 100;
}

Rectangle.prototype.editXY = function(x, y) {
    this.x = x;
    this.y = y;
}

Rectangle.prototype.editWidth = function(width) {
    this.width = width;
}

Rectangle.prototype.editHeight = function(height) {
    this.height = height;
}

Rectangle.prototype.editColor = function(color) {
    this.color = color;
}

export default Rectangle;