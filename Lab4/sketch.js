// add img
// add vid
// add music
// volume
// autoplay
// a lot of usagi

var usagi;
var momonga;
var video;
var audio;


function setup() {
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);
    usagi = loadImage('usagi.png');
    momonga = loadImage('momonga.png');
    video = createVideo('CHIIKAWA USAGIS SINGING.mp4');
    video.hide();
    video.play();
    video.volume(0);

    audio = createAudio('[Cover] ENHYPEN JAY - Always (1995 Wembley ver. 원곡 ： Bon Jovi).wav');
    audio.loop();
    audio.volume(0.1)
}

function draw() {
    background('bisque');
    
    let videoWidth = windowWidth * 0.8;
    let videoHeight = videoWidth * (video.height / video.width);
    image(video, width / 2, height / 4, videoWidth, videoHeight);

    let usagiWidth = usagi.width * 0.9;
    let usagiHeight = usagi.height * 0.9;
    image(usagi, width / 4, height / 1.59, usagiWidth, usagiHeight);

    let momongaWidth = momonga.width * 0.7;
    let momongaHeight = momonga.height * 0.7;
    image(momonga, (3 * width) / 4, height / 1.5, momongaWidth, momongaHeight);
}

function mousePressed(){
    video.play();
    meow.play();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}