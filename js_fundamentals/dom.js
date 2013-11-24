// Exercises: The DOM

// EXERCISE: The Logo Hijack

// No homepage is safe from the logo bandit!

// Open up www.google.com in Chrome or Firefox, and open up the console.
// Find the Google logo and store it in a variable.
// Modify the source of the logo IMG so that it's a Yahoo logo instead.
// Find the Google search button and store it in a variable.
// Modify the text of the button so that it says "Yahooo!" instead.



/* 

	var gLogo = document.GetElementById("hplogo");
 
	gLogo.setAttribute("style","background:url(http://l.yimg.com/rz/d/yahoo_frontpage_en-CA_s_f_p_101x50_frontpage.png) no-repeat;background-size:269px 95px;height:95px;width:269px");

	var gButton  = document.getElementById("gbqfsa");

	gButton.innerHTML = "Yahoo!";

*/



// I feel dirty having done that


// EXERCISE: About Me

// Cuz every webpage needs an "About" section.

// Start with this HTML and save it as "aboutme.html":
// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset="utf-8"/>
//   <title>About Me</title>
// </head>
// <body>
//   <h1>About Me</h1>
  
//   <ul>
//     <li>Nickname: <span id="nickname"></span>
//     <li>Favorites:  <span id="favorites"></span>
//     <li>Hometown: <span id="hometown"></span>
//    </ul>
  
//  </body>
// </html>
  
// Add a script tag to the bottom.
// Change the body style so it has a font-family of "Arial, sans-serif".
// Replace each of the spans (nickname, favorites, hometown) with your own information.
// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

(function(){

	document.body.setAttribute("style","font-family: Arial,sans-serif;");
	document.getElementById("nickname").innerHTML = "Mr. "+Math.round(Math.random()*100)+"%";
	document.getElementById("favorites").innerHTML = "Ketchup Chips";
	document.getElementById("hometown").innerHTML = "Neptune";
	var list = document.getElementsByTagName("li");
	for (i=0; i <= list.length-1 ; i++){
		list[i].setAttribute("class","listitem");
	}
	document.write("<style> .listitem { color:red; } </style>"); // ugh, inline style. ugh.

	var img = document.createElement("img");
	img.src = "http://placekitten.com/"+Math.round(Math.random()*1000)+"/"+Math.round(Math.random()*1000);
	document.body.appendChild(img);

})();

// EXERCISE: The Book List

// Keep track of which books you read and which books you want to read!

// Create a webpage with an h1 of "My Book List".
// Add a script tag to the bottom of the page, where all your JS will go.
// Copy the array of books from the previous exercise.
// Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
// Bonus: Use a ul and li to display the books.
// Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
// Bonus: Change the style of the book depending on whether you have read it or not.

(function(){

	function Book(title,author,alreadyRead,coverURL){
		this.title = title;
		this.author = author;
		this.alreadyRead = alreadyRead;
	}

	var HP = new Book("Harry Potter and the Mystery of the Haunted Amusement Park","j/k Rowling",true,"http://placekitten.com/100/175");
	var HB = new Book("The Hardy Boys and The Socerer's Stone","I.R.L. Stine",false,"http://placekitten.com/100/175");
	var MM = new Book("Mice are from Mars, Men are from Venus","D.J. Lasinger",true,"http://placekitten.com/100/175");
	var NN = new Book("The Necronomicon","Hewlett Packard Lovecraft",false,"http://placekitten.com/100/175");

	var readingList = [HP,HB,MM,NN];

	//document.getElementsByTagName("h2")[0].appendChild("<ul>");

	u = document.createElement("ul");
	b = document.getElementById("books");
	b.parentNode.insertBefore(u,b);


	for( i=0 ; i <= readingList.length-1; i++){
		currentbook = readingList[i];
		if(currentbook.alreadyRead === true){
			document.
			entry = "<li class = read>"+currentbook.title+" by "+currentbook.author+"</li>";
			document.createElement("li");
		}else {
			output = "You still have to read "+currentbook.title+" by "+currentbook.author+".";
			logAndDisplay(output);
		}
	}
})();



