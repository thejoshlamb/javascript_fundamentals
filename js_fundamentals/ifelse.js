// Exercises: if/else statements

function randInt(){
	return Math.round(Math.random()*100);
}

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

(function() {
	function greaterNum(num1,num2){
		if(num1>num2){
			return num1;
		} else if(num1<num2) {
			return num2;
		} else {
			return "Neither";
		}
	}
	document.write("<h2>What number's bigger?</h2>");

	num1 = randInt();
	num2 = randInt();
	document.write(greaterNum(num1,num2)+" is the greater of "+num1+" and "+num2+".</br>");
	num1 = randInt();
	num2 = randInt();
	document.write(greaterNum(num1,num2)+" is the greater of "+num1+" and "+num2+".</br>");
	num1 = randInt();
	num2 = randInt();
	document.write(greaterNum(num1,num2)+" is the greater of "+num1+" and "+num2+".</br>");
	num1 = 5;
	num2 = 5;
	document.write(greaterNum(num1,num2)+" is the greater of "+num1+" and "+num2+".</br>");

})();

// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

(function() {
	function helloWorld(lang){
		switch(lang)
		{
		case "en":
			return "Hello World!</br>";
		case "es":
			return "Hola, Monda?</br>";
		case "de":
			return "Guten Tag... Worldenheimer.</br>";
		default:
			return "I don't speak that language.</br>";
		}
	}
	document.write("<h2>Hello Worlds!</h2>");
	document.write(helloWorld("en"));
	document.write(helloWorld("es"));
	document.write(helloWorld("de"));
	document.write(helloWorld("fr"));

})();

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.



	function assignGrade(score){
		if(score >= 90){
			return "A";
		} else if(score >= 75){
			return "B";
		} else if(score >= 60){
			return "C";
		} else if(score >= 50){
			return "D";
		} else if(score <= 49){
			return "F";
		}
	}

		document.write("<h2>Grade Assigner</h2>");

		score = randInt();
		document.write("A score of "+score+" is a(n) "+assignGrade(score)+".</br>");
		score = randInt();
		document.write("A score of "+score+" is a(n) "+assignGrade(score)+".</br>");
		score = randInt();
		document.write("A score of "+score+" is a(n) "+assignGrade(score)+".</br>");
		score = randInt();
		document.write("A score of "+score+" is a(n) "+assignGrade(score)+".</br>");



// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".
//(function(){

	function pluralize(noun,number){
		number = Math.round(number);
		if(number < 1){
			return "No "+noun+"s";
		} else if(number == 1){
			return "1 "+noun;
		} else if(number > 1){
			return number+" "+noun+"s";
		}
	}

	document.write("<h2>Pluralizer</h2>");

	document.write(pluralize("dog",1)+"</br>");
	document.write(pluralize("dog",2)+"</br>");
	document.write(pluralize("cat",0)+"</br>");
	document.write(pluralize("snake",100)+"</br>");

//})();



