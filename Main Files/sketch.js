//this variable is gonna be our snake objet
var snake;
var scl = 20;
	
	//to manipulate our move
var cantGoLeftOrRight = true;
var cantGoUpOrDown = true;
var food;
function setup() {
	//el tamano de nuestro lugar donde vamos a trabajar
  createCanvas(600, 600);
  //objet type snake
  snake = new Snake();
  //to our game vaya mas despacio
  frameRate(10);

  //created vector to store x and y of our food
  pickLocation();

}

//pickLocation of food
function pickLocation(){

	var cols = floor(width/scl);
	var rows = floor(height/scl);

	food = createVector(floor(random(cols)), floor(random(rows)));
  //to multiplicar ese valor por scl;
  food.mult(scl);
}

function draw() {
	//make the canvas black
	background(51);
	
	//is eat the food
	if(snake.eat(food))
		pickLocation();		

	//is snake die
	snake.death();
	//snake call objets
	snake.update();
	snake.show();

	
	//draw our food
	fill(255, 0, 100);
	rect(food.x, food.y, scl, scl);
}

//funcion to keyPressed	
function keyPressed(){	

	if((keyCode === UP_ARROW) && (cantGoUpOrDown === true)){
		
		cantGoUpOrDown = false;
		cantGoLeftOrRight = true;

		//0 to x and -1 to go up
		snake.dir(0, -1);
		
	}else if((keyCode === DOWN_ARROW) && (cantGoUpOrDown === true)){

		cantGoUpOrDown = false;
		cantGoLeftOrRight = true;
			
		//0 to x and 1 to go down	
		snake.dir(0, 1);

	}else if((keyCode === RIGHT_ARROW) && (cantGoLeftOrRight === true)){

		cantGoUpOrDown = true;
		cantGoLeftOrRight = false;
		
		//1 to x and 0 to go right
		snake.dir(1, 0);

	}else if((keyCode === LEFT_ARROW) && (cantGoLeftOrRight === true)){
		
		cantGoUpOrDown = true;
		cantGoLeftOrRight = false;

		//-1 to x and 0 to go left
		snake.dir(-1, 0);
		
	}

}
