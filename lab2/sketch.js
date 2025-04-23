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
        stroke('mediumslateblue');       // outline color
        strokeWeight(6);
        // Draw an upward-pointing triangle
        triangle(
            this.x, this.y,                      // top vertex
            this.x - this.w / 2, this.y + this.h, // bottom left
            this.x + this.w / 2, this.y + this.h  // bottom right
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
}