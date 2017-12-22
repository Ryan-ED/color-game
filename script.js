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
//Put a randomized colour into a variable to serve as the "correct" colour.
var pickedColour = randomColour();
//Span tag in the <h1>
var colourDisplay = document.getElementById("colourDisplay");
//Span tag to display a message when a user clicks on a square
var messageDisplay = document.getElementById("message");

//Set the "correct" colour to be displayed in the <span> tag of the <h1>
colourDisplay.textContent = pickedColour;

//Loop through each square to add a colour from the array and add a click listener
for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colours[i];
    squares[i].addEventListener("click", colourGuess);
}

//Click function
function colourGuess(){
    
    //Set a variable to be the colour of whichever square was clicked
    var clickedColour = this.style.backgroundColor;

    //Checked if the clicked square's colour matches the "correct" colour
    if(clickedColour === pickedColour){

        messageDisplay.textContent = "Correct!";
        //Function that makes all the squares the same colour as the "correct" square
        changeColours(clickedColour);
        
    }
    else {
        //Changes the background colour of the square to match that of the body
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try again";
    }
}

function changeColours(colour){

    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colour;
    }
}

//Randomizes the "correct" colour
function randomColour(){
    var random = Math.floor(Math.random() * colours.length);
    return colours[random];
}