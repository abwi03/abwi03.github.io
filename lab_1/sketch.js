

function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    background(250,166,255);
    fill(115,83,186)
    stroke('black')
    for(var i = 0; i < 1000; i++){
        rect((i*40)%width,(i*40)%height,30,30,30);
        
        
    }
    fill(17,157,164)
    if(mouseX < 200){
        stroke('white')
        rect(mouseX,mouseY,100,100,100);
        
        
    }else{
        fill(255,200,87)
        stroke('white')
        rect(mouseX, mouseY, 100,100);
    }
}