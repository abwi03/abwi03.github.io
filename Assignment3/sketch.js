let groceryList = []; 
let inputField; 
let addButton; 
let itemCountSlider; 
let clearButton;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250);

  textFont('Times New Roman');

  let centerX = width / 2;
  let centerY = height / 2;

  inputField = createInput();
  inputField.size(300);
  inputField.position(centerX - inputField.width / 2, height - 130);

  addButton = createButton('Add Item');
  addButton.position(centerX - addButton.width / 2 - 115, height - 100);
  addButton.mousePressed(addItem); 
  addButton.style('background-color', 'Lavender'); 
  addButton.style('border-color', 'plum'); 
  addButton.style('border-radius', '20px');
  addButton.style('font-size', '20px');
  addButton.style('font-family', 'Times New Roman');

  clearButton = createButton('Clear List');
  clearButton.position(centerX - clearButton.width / 2 + 90, height - 100);
  clearButton.mousePressed(clearList);
  clearButton.style('background-color', 'Lavender');
  clearButton.style('border-color', 'plum');
  clearButton.style('border-radius', '20px');
  clearButton.style('font-size', '20px');
  clearButton.style('font-family', 'Times New Roman');

  itemCountSlider = createSlider(1, 20, 1);
  itemCountSlider.position(centerX - itemCountSlider.width / 1.10, height - 70);
  itemCountSlider.style('width', '250px');
  itemCountSlider.style('height', '30px');

  textSize(16);
  textAlign(CENTER, TOP);
  fill(0);
  text("Enter a number and click 'Add Item' to add it to the list.", width / 2, 10);
}

function draw() {
  background('LavenderBlush');

  textSize(20);
  textAlign(CENTER, TOP);
  text("Things I Need to Buy:", width / 2, 150);

  textAlign(LEFT, TOP);
  for (let i = 0; i < groceryList.length; i++) {
    text(groceryList[i], width / 2 - 150, 190 + i * 20);
    if (i >= 10) { 
      break;
    }
  }

  textSize(15);
  textAlign(LEFT, TOP);
  text("Items to Add: " + itemCountSlider.value(), 550, 120);
}

function addItem() {
  let item = inputField.value();
  let numItems = itemCountSlider.value();

  for (let i = 0; i < numItems; i++) {
    groceryList.push(item);
  }

  inputField.value('');
}

function clearList() {
  groceryList = []; 
}

function mousePressed() {
}