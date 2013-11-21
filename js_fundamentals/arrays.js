// Exercises: Arrays

// EXERCISE: Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

( function(){
	var pizzas = ["Pepperoni","Garlic","Bacon","Cheese","Sushi"];

	document.write("<h2>Top Choice Array</h2>");

	for ( i=1; i <= pizzas.length; i++ ){
		document.write("My #"+i+" choice is "+pizzas[i-1]+".</br>");
	}

})();

