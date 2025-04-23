var purpleCircle = {
    x: 30,
    y: 9,
    w: 150, 
    h: 150, 
    xSpeed: 15,
    ySpeed: 20,
    colour: 'orchid',
    draw: function(){
        fill(this.colour);
        stroke('greenyellow');       // outline color
        strokeWeight(20);
        ellipse(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width - this.w){
            this.xSpeed *= -1;
        }
        if(this.y > height - this.h || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};


var lemmonchiffonTriangle = {
    x: 40,
    y: 50,
    w: 100,
    h: 80,
    xSpeed: 5,
    ySpeed: 20,
    colour: 'lemonchiffon',
    draw: function(){
        fill(this.colour);
        stroke('mediumslateblue');
        strokeWeight(6);
        triangle(
            this.x, this.y,
            this.x - this.w / 2, this.y + this.h,
            this.x + this.w / 2, this.y + this.h
        );
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width){
            this.xSpeed *= -1;
        }
        if(this.y > height || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};

var lightpinkSquare = {
    x: 0,
    y: 0,
    size: 60,
    xSpeed: 10,
    ySpeed: 30,
    colour: 'lightpink',
    draw: function(){
        fill(this.colour);
        stroke('aquamarine');       // outline color
        strokeWeight(10);
        rect(this.x, this.y, this.size, this.size);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x < 0 || this.x > width - this.size) {
            this.xSpeed *= -1;
        }
        if (this.y < 0 || this.y > height - this.size) {
            this.ySpeed *= -1;
        }
    }
};

// redBrick.x++ returns current value then increments
// ++redBrick.x increments value and then returns   

function setup(){
    createCanvas(1280,720);
}

function draw(){
    background('aliceblue'); 
    purpleCircle.draw();
    purpleCircle.move();
    lemmonchiffonTriangle.draw();
    lemmonchiffonTriangle.move();
    lightpinkSquare.draw();
    lightpinkSquare.move();
}