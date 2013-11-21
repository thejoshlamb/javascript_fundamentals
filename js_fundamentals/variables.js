// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
(function() {
	var kids = 300;
	var partner = "Javascript";
	var place = "Java";
	var job = "Fortune Teller";

	document.write("<h2>Fortune Teller</h2>");
	document.write("You will be a " + job +" in " + place + ", and married to " + partner + " with " + kids + " kids.");
})();
// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.
(function() {
	thisYear = new Date().getFullYear();
	birthYear = 1987;
	age = thisYear - birthYear;
	otherage = age + 1;

	document.write("<h2>Age Calculator</h2>");
	document.write("They are either "+age+" or "+otherage+".");
})();
// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
(function() {
	age = 27;
	maxAge = 87;
	amountPerDay = 2;

	yearsLeft = maxAge - age;
	lifetimeConsumption = yearsLeft * 365 * amountPerDay;

	document.write("<h2>Lifetime Supply Calculator</h2>");
	document.write("You will need "+lifetimeConsumption+" to last you until the ripe old age of "+maxAge+".");
})();
// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".
(function() {
	radius = 5;
	pi = 3.14159265359;
	circumfrence = 2 * pi * radius;
	area = pi * Math.pow(radius,2);

	document.write("<h2>The Geometrizer</h2>");
	document.write("The circumfrence is "+circumfrence+".<br>");
	document.write("The area is "+area);
})();
// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
(function() {
	celToFahr = 10;
	fahrenheit = celToFahr * (9/5) + 32;
	fahrToCel = 10;
	celsius = (fahrToCel - 32) * (5/9);

	document.write("<h2>The Temperature Converter</h2>");
	document.write(celToFahr+" Celsius is "+fahrenheit+" fahrenheit.</br>");
	document.write(fahrToCel+" Fahrenheit is "+celsius+" celsius.");

})();
