//Define variables for Car, Wall, Speed, weight and Deformation
var car, Wall, speed, weight, deformation;

function setup() {
	createCanvas(1600, 400);
	//Assign Random Values to Speed and Weight
	speed = random(55, 90);
	weight = random(400, 1500);

	//Create Car Sprite and assign it color
	car = createSprite(50, 200, 50, 50);
	car.shapeColor = 'white';

	//Create Wall Sprite and assign it color
	wall = createSprite(1600, 200, 60, height / 2);
	wall.shapeColor = rgb(80, 80, 80);

	deformation = 0;
}

function draw() {
	background('#C0C0C0');

	//Give Velocity to car
	car.velocityX = speed;

	//Text Formatting to display Deformation Value
	fill(0, 0, 0);
	textSize(15);
	text('Deformation: ' + Math.round(deformation), 750, 100);

	//Check for collision and Calculate Deformation Value
	if (wall.x - car.x < (car.width + wall.width) / 2) {
		//Calculate Deformation
		deformation = 0.5 * weight * speed * speed / 22500;

		//Set Car's Velocity to 0 and make it stop it a bit back
		car.x = wall.x - wall.width / 2 - 20;
		car.velocityX = 0;

		//Set Car color to red if deformation is greater than 180
		if (deformation > 180) {
			car.shapeColor = 'red';
		}
		//Set Car Color to Yellow if deformation is lesser than 180 but greater than 100
		if (deformation < 180 && deformation > 100) {
			car.shapeColor = 'yellow';
		}
		//Set Car color to green if deformation is lesser than 100
		if (deformation < 100) {
			car.shapeColor = 'green';
		}
	}
	drawSprites();
}
