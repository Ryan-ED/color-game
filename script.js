//NOTE: In South Africa we use UK English so I spell the word "colour" with a "u"!

//Hard coded some colours into an array just for testing. It will be randomized later
var colours = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

//Made the list of squares into a variable.
var squares = document.querySelectorAll(".square");
//Put one of the colours into a variable to serve as the "correct" colour. Just for testing. Will be randomized
var pickedColour = colours[3];
//Span tag in the <h1>
var colourDisplay = document.getElementById("colourDisplay");

//Set the "correct" colour to be displayed in the <span> tag
colourDisplay.textContent = pickedColour;

//Loop through each square to add a colour from the array and add a click listener
for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colours[i];
    squares[i].addEventListener("click", colourGuess);
}

function colourGuess(){
    
    //Set a variable to be the colour of whichever square was clicked
    var clickedColour = this.style.backgroundColor;

    //Checked if the clicked square's colour matches the "correct" colour
    if(clickedColour === pickedColour){
        alert("Correct");
    }
    else {
        alert("Wrong");
    }
}