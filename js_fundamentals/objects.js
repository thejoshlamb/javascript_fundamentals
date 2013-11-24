// Exercises: Objects

// EXERCISE: The Recipe Card

function logAndDisplay(output){
	if(typeof(output) == "string" || typeof(output) == 'number'){
	console.log(output);
	document.write(output+"</br>");
} else if(Array.isArray(output)){
		document.write("<ul>");
		for ( i=1; i <= output.length; i++ ){
			console.log(output[i-1]);
			document.write("<li>"+output[i-1]+"</li>");
		}
		document.write("</ul>");
	}
}

// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa
(function(){

	var salad = {
		name: "Salad",
		servings: 1,
		ingredients: ["Lettuce","Tomatoes","Celery","Loneliness"]
	};

	function Recipe(name,servings,ingredients){
		this.name = name;
		this.servings = servings;
		this.ingredients = ingredients;
	}

	function displayRecipe(recipe){
		document.write("<b>");
		logAndDisplay(recipe.name);
		document.write("</b>");
		logAndDisplay("Serves:");
		logAndDisplay(recipe.servings);
		logAndDisplay("Ingredients:");
		logAndDisplay(recipe.ingredients);
	}

	document.write("<h2>The Recipe Card</h2>");

	var nachos = new Recipe("Nachos Galacticones",2,["Chips","Cheese","Salsa","Guacamole","Determination"]);
	var casserole = new Recipe("Danger Casserole",5,["Ground Beef","Rice","Red Pepper","Cyanide","Oregano"]);
	var drink = new Recipe("Rum & Coke",2,["Rum","Coke","Ice"]);

	displayRecipe(salad);
	displayRecipe(nachos);
	displayRecipe(casserole);
	displayRecipe(drink);

})();
// EXERCISE: The Reading List

// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

(function(){

	function Book(title,author,alreadyRead){
		this.title = title;
		this.author = author;
		this.alreadyRead = alreadyRead;
	}

	var HP = new Book("Harry Potter and the Mystery of the Haunted Amusement Park","j/k Rowling",true);
	var HB = new Book("The Hardy Boys and The Socerer's Stone","I.R.L. Stine",false);
	var MM = new Book("Mice are from Mars, Men are from Venus","D.J. Lasinger",true);
	var NN = new Book("The Necronomicon","Hewlett Packard Lovecraft",false);

	var readingList = [HP,HB,MM,NN];

	document.write("<h2>The Reading List</h2>");

	for( i=0 ; i <= readingList.length-1; i++){
		currentbook = readingList[i];
		if(currentbook.alreadyRead === true){
			output = "You have already read "+currentbook.title+" by "+currentbook.author+".";
			logAndDisplay(output);
		}else {
			output = "You still have to read "+currentbook.title+" by "+currentbook.author+".";
			logAndDisplay(output);
		}
	}

})();

// EXERCISE: The Movie Database

// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

(function(){

	function Movie(title,duration,stars){
		this.title = title;
		this.duration = duration;
		this.stars = stars;
	}

	var TG = new Movie("Top Gun",120,["Maverick","Iceman","Goose"]);
	var ZZ = new Movie("Zardoz",1000,["Sean Connery","A Red Leather Codpiece","Humiliation"]);
	var KZ = new Movie("Kazaam",5,["Shaq","Hitler","Satan","Worst Film ever made"]);

	var movieDB = [TG,ZZ,KZ];

	document.write("<h2>The Movie Database</h2>");

	for( i=0 ; i <= movieDB.length-1; i++){
		currentmovie = movieDB[i];
			output = currentmovie.title+" lasts for "+currentmovie.duration+"mins. Stars: "+currentmovie.stars;
			//for( i=0 ; i <= currentmovie.stars.length-1; i++){
			//	output = output+currentmovie.stars[i]+", ";
			//}
		logAndDisplay(output);
	}

})();

