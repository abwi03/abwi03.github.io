


function setup(){
    createCanvas(1080,500);
    background('mistyrose');
    strokeWeight(10)
}

function draw(){
    line(mouseX, mouseY, pmouseX, pmouseY);
}