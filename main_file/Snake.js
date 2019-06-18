
//created objet Snake
function Snake(){
	//varibles of our plano carteciano
	this.x = 0;
	this.y = 0;
	this.xspeed = 1;
	this.yspeed = 0;
	this.total = 0;
	this.tail = []; //make array

	this.eat = function(pos){
		//this.x and this.y is the position where is the snake and pos.x and y is the position of the food
		var d = dist(this.x, this.y, pos.x, pos.y);
		//is the distance between snake and food is less than a pixel, then do this
		if(d < 1){
			this.total++;
			return true;
		}else{
			return false;
		}
	}	

	//update our direction
	this.dir = function(x, y){
		this.xspeed = x;
		this.yspeed = y;
	}

	//when death 
	this.death = function(){
		for (var i = 0; i < this.tail.length; i++) {
			var pos = this.tail[i];
			var d = dist(this.x, this.y, pos.x, pos.y);
			//is choca con su propio cuerpo pues todo vuelve a la normalidad
			if(d < 1){
				this.total = 0;
				this.tail = [];
			}
		}
	}
	//this update the change or move that our objet has
	this.update = function(){


		if(this.total === this.tail.length){	
			
			for (var i = 0; i < this.tail.length -1 ; i++) {
				this.tail[i] = this.tail[i + 1];
			}
		}
		this.tail[this.total - 1] = createVector(this.x, this.y);		

		
		//the value of x and y change respet with xspeed and yspeed
		this.x = this.x + this.xspeed * scl;
		this.y = this.y + this.yspeed * scl;

		//add constrain to our game
		this.x = constrain(this.x, 0, width - scl);
		this.y = constrain(this.y, 0, height - scl);
	}

	//to show our element
	this.show = function(){
		//make the rectangle white
		fill(255);
		
		for (var i = 0; i <  this.tail.length ; i++) {
			rect(this.tail[i].x, this.tail[i].y, scl, scl);
		}
		
		//function rect that created a rectangle in the position x, y, and height and width of 10 by 10
		rect(this.x, this.y, scl, scl);

	}

}
