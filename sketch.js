let eyeSize = 30; 
let eyeColor; 
let skyColor;
let sunAngle = 0; // Track the angle for sun movement
let sunRadius = 150; // Radius of the circular path for the sun

function setup() {
  createCanvas(400, 400); 
  skyColor = color(135, 206, 235); // Initial sky color
  eyeColor = color(134, 169, 217); // Initial eye color
}

function draw() {
  background(skyColor); 
  
  // Sun with corona moving in a clockwise circle
  noStroke();
  let sunX = width / 2 + sunRadius * cos(sunAngle);
  let sunY = height / 2 + sunRadius * sin(sunAngle);
  
  fill(255, 255, 0); // Sun color
  ellipse(sunX, sunY, 80, 80); // Sun
  fill(255, 255, 0, 100); // Slightly transparent corona
  ellipse(sunX, sunY, 120, 120); // Corona

  // Green hills
  fill(34, 139, 34); // Green
  noStroke();
  ellipse(200, 350, 500, 150); // Big hill
  ellipse(100, 330, 300, 120); // Smaller hill
  ellipse(300, 330, 300, 120); // Smaller hill

  // Torso
  fill(0, 0, 128); // Navy blue
  noStroke();
  ellipse(200, 400, 180, 250); // Torso shape
  
  // Head
  fill(255, 224, 189);  
  ellipse(200, 200, 150, 200); // Head shape

  // Eyes
  fill(255); 
  ellipse(170, 180, eyeSize, eyeSize / 2); // Left eye
  ellipse(230, 180, eyeSize, eyeSize / 2); // Right eye
  fill(eyeColor); 
  ellipse(170, 180, eyeSize / 3, eyeSize / 3); // Left Iris
  ellipse(230, 180, eyeSize / 3, eyeSize / 3); // Right Iris

  // Mouth
  noFill();
  stroke(150, 0, 0);
  arc(200, 250, 50, 20, 0, PI); // Smiling mouth

  // Hair 
  fill(71, 41, 16); // Brown hair color
  stroke(71, 41, 16); // Hair outline color
  arc(200, 100, 120, 90, 0, PI); // Hair shape
}

function mousePressed() {
  // Randomize both sky and eye color on click
  skyColor = color(random(255), random(255), random(255)); // Random sky color
  eyeColor = color(random(255), random(255), random(255)); // Random eye color

  // Move sun by a smaller portion of the circle
  sunAngle += TWO_PI / 16; 
}
