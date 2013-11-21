// Exercises: for loops

// EXERCISE: The even/odd reporter

// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

document.write("<h2>The Even/Odd Reporter</h2>");

(function(){
	for(count = 0; count <= 20; count++){
		if(count % 2 === 0){
			document.write(count+" is even.</br>");
		} else {
			document.write(count+" is odd.</br>");
		}
	}
})();

// EXERCISE: Multiplication Tables

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

document.write("<h2>Multiplication Tables</h2>");

(function(){
	for( i=0 ; i <= 10 ; i++){
		document.write(i+" x 9 ="+ i*9+ ".</br>");
	}

	document.write("<table>");


// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

	for( x = 1; x <=10; x++){
		document.write("<tr>");
		
		for( y = 1; y <= 10; y++){
			document.write("<td>"+x+" x "+y+" = "+(x*y)+".</td>");
		}

		document.write("</tr>");
	}

	document.write("</table>");
})();




// EXERCISE: The Grade Assigner

// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

(function(){

	document.write("<h2>Grade Assigner 2</h2>");

	for( i = 60 ; i <= 100 ; i++)
		document.write("A score of "+i+" is a(n) "+assignGrade(i)+".</br>");
})();
