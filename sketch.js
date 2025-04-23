let canvas = document.getElementById("canvas");

let context = canvas.getContext("2d");

var window_height = window.innerHeight;
var window_width = window.innerWidth;

canvas.width = window_width;
canvas.height = window_height;

canvas.style.background = "#C6C4C5"


let hit_counter = 0;

class Circle {
    constructor(xpos, ypos, radius, color, text, speed) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.color = color;
        this.text = text;
        this.speed = speed;

        this.dx = 1 * this.speed;
        this.dy = 1 * this.speed;
    }

    draw(context) {
        context.beginPath();

        context.strokeStyle = this.color;
        context.textAlign = "center";
        context.textBaseline = "middle"
        context.font = "20px Arial"
        context.fillText(this.text, this.xpos, this.ypos);


        context.lineWidth = 5;
        context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
        context.stroke();
        context.closePath();

    }
    update() {

        this.text = hit_counter;

        context.clearRect(0, 0, window_width, window_height);
    
        this.draw(context);

        if ((this.xpos + this.radius) > window_width) {
            this.dx = -this.dx;
            hit_counter++;
        }
    
        if ((this.xpos - this.radius) < 0) {
            this.dx = -this.dx;
            hit_counter++;
        }
    
        if ((this.ypos - this.radius) < 0) {
            this.dy = -this.dy;
            hit_counter++;
        }
    
        if ((this.ypos + this.radius) > window_height) {
            this.dy = -this.dy;
            hit_counter++;
        }
    
        this.xpos += this.dx;
        this.ypos += this.dy;
    }
    
}


let my_circle = new Circle(100, 100, 50, "#88A7B9", hit_counter, 5);

my_circle.draw(context);

let updateCircle = function() {
    requestAnimationFrame(updateCircle);
    my_circle.update();
}

updateCircle();

/*
I followed these 4 tutorials to get the animation on my page
1. https://youtu.be/p88rNckccmg?si=Dbm30pTumsQSBCzY
2. https://youtu.be/EutvXK3eh0I?si=pnZeyfkSv7AwxhkD
3. https://youtu.be/AqamzLX9MCQ?si=tGyNmrqhr2xAEzBb
4. https://youtu.be/-wSn49DV9qU?si=t6EOk-kTMV7iqMiF
*/