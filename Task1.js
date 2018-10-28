const rand = function(num) {
    return Math.floor(Math.random() * num) + 1;
};

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = 1500
canvas.height = 900
context.fillStyle = "orange"
context.fillRect(0, 0, canvas.width, canvas.height)


const colorArray = ['red', 'blue', 'orange']
const createBoxes = function(count, canvasWidth, canvasHeight) {
    let array = [];
    for (let i = 0; i < count; i++) {
        array[i] = {
            x: rand(canvasWidth - 30),
            y: rand(canvasHeight - 30),
            width: 30,
            height: 30,
            xDelta: rand(10),
            yDelta: rand(10),
            color: colorArray[rand(colorArray.length) - 1],
            draw: function() {
                context.fillStyle = this.color;
                context.fillRect(this.x, this.y, this.width, this.height);
            },
            update: function() {

                if (this.x < 0 || this.x > canvasWidth - this.width) {
                    this.xDelta *= -1
                }

                if (this.y < 0 || this.y > canvasHeight - this.height) {
                    this.yDelta *= -1
                }
                this.color = colorArray[rand(colorArray.length) - 1],
                this.x += this.xDelta
                this.y += this.yDelta
            }
        }

    }

    return array;
}

const boxes = createBoxes(22, canvas.width, canvas.height);

const draw = function(){ 
    context.fillStyle = "red"
    context.fillRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].draw();
  }



};
const update = function(){
    for (let i = 0; i < boxes.length; i++) {
    boxes[i].update();
    }
};


const loop = function() {
    draw();
    update();
   
    requestAnimationFrame(loop);
}
loop();
