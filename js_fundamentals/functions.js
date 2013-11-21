// Exercises: Functions

function roundToTwo(number){
	return Math.round(number*100)/100;
}

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.
(function() {
	function tellFortune(kids,partner,place,job) {
		document.write("You will be a "+job+" in "+place+", and married to "+partner+" with "+kids+" kids.<br/>");
	}

	document.write("<h2>Fortune Teller 2</h2>");
	tellFortune(1,"C++","Seattle","Data Entry Clerk");
	tellFortune(3,"Ruby","Austin","Data Entry Manager");
	tellFortune(10,"Javascript","Detroit","VP of Data Entry");
})();

// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
(function() {
	function calculateAge(birthYear,thisYear){
		age = thisYear - birthYear;
		otherage = age + 1;
		document.write("You are either "+age+" or "+otherage+".</br>");
	}

	thisyear = new Date().getFullYear();

	document.write("<h2>Age Calculator 2</h2>");
	calculateAge(1987,thisyear);
	calculateAge(1992,thisyear);
	calculateAge(1945,thisyear);
})();

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.
(function() {

	maxAge = 87;
	
	function calculateSupply(age,amountPerDay){
		yearsLeft = maxAge - age;
		lifetimeConsumption = Math.round(yearsLeft * 365 * amountPerDay);
		document.write("You will need "+lifetimeConsumption+" to last you until the ripe old age of "+maxAge+".</br>");
	}

	document.write("<h2>Lifetime Supply Calculator</h2>");
	calculateSupply(19,3.5);
	calculateSupply(30,1.9);
	calculateSupply(50,0.8);
	
})();
// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

(function() {

	pi = 3.14159265359;

	function calcCircumfrence(radius){
		circumfrence = 2 * pi * radius;
		document.write("For a cicle with radius "+radius+", ");
		document.write("the circumfrence is "+roundToTwo(circumfrence)+".<br>");
	}

	function calcArea(radius){
		area = pi * Math.pow(radius,2);
		document.write("For a cicle with radius "+radius+", ");
		document.write("the area is "+roundToTwo(area)+".</br>");
	}
	
	document.write("<h2>The Geometrizer</h2>");
	calcCircumfrence(5);
	calcArea(5);
	calcCircumfrence(10);
	calcArea(8);
	calcCircumfrence(98);
	calcArea(24);
	
})();

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

(function() {

	function celsiusToFahrenheit(celToFahr){
		fahrenheit = celToFahr * (9/5) + 32;
		document.write(celToFahr+" Celsius is "+roundToTwo(fahrenheit)+" fahrenheit.</br>");
	}

	function fahrenheitToCelsius(fahrToCel){
		celsius = (fahrToCel - 32) * (5/9);
		document.write(fahrToCel+" Fahrenheit is "+roundToTwo(celsius)+" celsius.</br>");
	}

	document.write("<h2>The Temperature Converter</h2>");
	celsiusToFahrenheit(25);
	fahrenheitToCelsius(25);
	celsiusToFahrenheit(-40);
	fahrenheitToCelsius(-40);
	celsiusToFahrenheit(100);
	fahrenheitToCelsius(100);
	celsiusToFahrenheit(18);
	fahrenheitToCelsius(-500);

})();
