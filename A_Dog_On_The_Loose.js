// Rosalie Pepin 
// Nicholas Brown-Hernandez
// Web and FX: From Theory To Practice, 502-A22, sect. 03

let img1, img2, img // declare two image variables
let textX = -100
let textY = -100
let positionCalm = 500
let positionWave = -500

function preload() {
  img1 = loadImage("waveL.png")
  img2 = loadImage("waveR.png")
	imgCalm = loadImage("calm.png")
	font = loadFont("dogfont.ttf")
	

}

function setup() {
  createCanvas(windowWidth, windowHeight)
  sidewalk=loadImage("sidewalk.jpeg")
  img = img1 // set the initial image to img1
	dog = loadImage("dog.png")
}

function draw() {
	background(sidewalk)
  image(img,positionWave,200,575,750)
	image(imgCalm,positionCalm,200,575,750)
	image(dog, mouseX, 850, 150, 200)
	text("bark", textX, textY);

}

function mouseClicked() {
	 positionCalm = -500
	 positionWave = 500
  if (img == img1) { // if the current image is img1, switch to img2
    img = img2
  } else { // otherwise, switch to img1
    img = img1
  }
}

function keyPressed() {
  if (key === 'b') {
    textSize(45);
		textFont(font)
		textX = mouseX + random(-50,50)
		textY = 820
    fill(255,255,255);
  }
}
