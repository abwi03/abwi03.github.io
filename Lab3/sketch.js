let colorPicker;
let bgColorPicker;
let strokeWeightSlider;
let bgColorButton;
let eraserButton;
let fillCanvasButton;
let erasing = false;

function setup() {
    createCanvas(1080, 500);

    colorPicker = createColorPicker('DarkSlateBlue');
    colorPicker.position(400, height + 10);

    strokeWeightSlider = createSlider(6, 20, 10, 2);
    strokeWeightSlider.position(458, height + 15);

    bgColorPicker = createColorPicker('Lavender');
    bgColorPicker.position(600, height + 10);

    bgColorButton = createButton('RESET');
    bgColorButton.position(300, height + 15);
    bgColorButton.mousePressed(repaint);

    eraserButton = createButton('ERASER');
    eraserButton.position(685, height + 15);
    eraserButton.mousePressed(toggleEraser);

    fillCanvasButton = createButton('FILL CANVAS');
    fillCanvasButton.position(750, height + 10);
    fillCanvasButton.mousePressed(fillCanvas);
    fillCanvasButton.position(480, height + 45);

    background(bgColorPicker.value());
}

function draw() {
    if (mouseIsPressed && mouseY <= height) {
        strokeWeight(strokeWeightSlider.value());

        if (erasing) {
            stroke(bgColorPicker.value());
        } else {
            stroke(colorPicker.value());
        }

        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}

function repaint() {
    background(bgColorPicker.value());
}

function toggleEraser() {
    erasing = !erasing;
    eraserButton.html(erasing ? 'DRAW' : 'ERASER');
}

function fillCanvas() {
    background(bgColorPicker.value());
}

