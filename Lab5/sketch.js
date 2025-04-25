let songData;
let inputs = [];
let reasons = [];
let submitButton;
let clearButton;
let savedData = [];

function preload() {
  songData = loadJSON('package.json'); // Make sure this path is correct
}

function setup() {
  noCanvas();

  // Heading
  createElement('h1', 'Rank the Songs from the Album "YOUNI-T"')
    .style('text-align', 'center')
    .style('color', '#34373B');

  // Spotify link
  createA(
    'https://open.spotify.com/album/6rTNYVHdejHf1dAdtvMr9t?si=ZHEXXmJ6RlS3pj_odhXgIw',
    '🎵 Listen to the Album on Spotify 🎵',
    '_blank'
  )
    .style('display', 'block')
    .style('text-align', 'center')
    .style('margin-bottom', '30px')
    .style('font-size', '18px')
    .style('color', 'blue')
    .style('text-decoration', 'underline');

  let container = createDiv().class('container');

  // Load saved rankings (if available)
  const stored = localStorage.getItem('songRankings');
  if (stored) {
    savedData = JSON.parse(stored);
    console.log('Loaded saved rankings:', savedData);
  }

  // Create input fields for each song
  for (let i = 0; i < songData.songs.length; i++) {
    let row = createDiv().class('row').parent(container);

    createSpan(`${i + 1}. ${songData.songs[i]}`)
      .class('song-label')
      .style('margin-right', '10px')
      .parent(row);

    let rankInput = createInput('');
    rankInput.attribute('placeholder', 'Rank (1-7)');
    rankInput.class('rank-input');
    rankInput.parent(row);
    inputs.push(rankInput);

    let reasonInput = createInput('');
    reasonInput.attribute('placeholder', 'Why?');
    reasonInput.class('reason-input');
    reasonInput.parent(row);
    reasons.push(reasonInput);
  }

  // Prefill the inputs with saved data
  for (let i = 0; i < songData.songs.length; i++) {
    if (savedData[i]) {
      inputs[i].value(savedData[i].rank);
      reasons[i].value(savedData[i].reason);
    }
  }

  // Submit button to save rankings
  submitButton = createButton('Save Rankings');
  submitButton.class('submit-button');
  submitButton.mousePressed(saveData);
  submitButton.parent(container);

  // Clear button to reset rankings
  clearButton = createButton('Clear Rankings');
  clearButton.class('clear-button');
  clearButton.mousePressed(clearData);
  clearButton.parent(container);

  // Center buttons and add space between them
  styleButtons();
}

// Save rankings to localStorage
function saveData() {
  let rankings = [];
  let seenRanks = new Set();

  // Gather rankings and reasons
  for (let i = 0; i < inputs.length; i++) {
    const rank = parseInt(inputs[i].value());

    if (isNaN(rank) || rank < 1 || rank > 7) {
      alert(`Please enter a valid rank (1-7) for song #${i + 1}`);
      return;
    }

    if (seenRanks.has(rank)) {
      alert(`Rank ${rank} is duplicated. Please use each rank only once.`);
      return;
    }

    seenRanks.add(rank);

    rankings.push({
      song: songData.songs[i],
      rank: rank,
      reason: reasons[i].value()
    });
  }

  // Save to localStorage
  localStorage.setItem('songRankings', JSON.stringify(rankings));
  console.log('Saved rankings:', rankings);
  alert('Your rankings have been saved!');
}

// Clear rankings from localStorage and reset inputs
function clearData() {
  localStorage.removeItem('songRankings');
  inputs.forEach(input => input.value(''));
  reasons.forEach(input => input.value(''));
  console.log('Rankings have been cleared.');
  alert('Your rankings have been cleared!');
}

// Styling for buttons
function styleButtons() {
  // Centering the buttons
  const container = select('.container');
  container.child(submitButton);
  container.child(clearButton);

  // Apply styling to both buttons (same style)
  submitButton.style('display', 'block')
    .style('width', '200px')
    .style('height', '50px')
    .style('font-size', '18px')
    .style('background-color', '#4CAF50')
    .style('color', 'white')
    .style('border', 'none')
    .style('border-radius', '5px')
    .style('margin', '10px auto');

  clearButton.style('display', 'block')
    .style('width', '200px')
    .style('height', '50px')
    .style('font-size', '18px')
    .style('background-color', '#f44336') // Red background
    .style('color', 'white')
    .style('border', 'none')
    .style('border-radius', '5px')
    .style('margin', '10px auto');
}
