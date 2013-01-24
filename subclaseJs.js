
//crear una subclase javascript
function Rectangle (w,h){
    this.width = w;
    this.height = h;
}

Rectangle.prototype.area = function() {
    return this.width * this.height;
    
}

function PositionedRectangle (w,h,x,y){

    Rectangle.call(this,w,h); //encadenamiento de constructora (llama la constuctora de la clase rectacgle)
    
    this.x = x;
    this.y = y;
} 

PositionedRectangle.prototype = new Rectangle();

delete PositionedRectangle.prototype.width;
delete PositionedRectangle.prototype.height;

PositionedRectangle.prototype.constructor = PositionedRectangle;

PositionedRectangle.prototype.contains = function(x,y) {

    return (
    x > this.x && x < this.x + this.width &&
    y > this.y && y < this.y + this.height
     );
}

var r = new PositionedRectangle(2,2,2,2);

console.log(r.contains(3,3));

console.log(r.area());

console.log(r instanceof PositionedRectangle);
console.log(r instanceof Rectangle);
console.log(r instanceof Object);
