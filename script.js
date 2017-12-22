//NOTE: In South Africa we use UK English so I spell the word "colour" with a "u"!

//This variable keeps track of the difficulty by setting the number of squares displayed
var numSquares = 6;
//Colours are now randomly generated using a DIY RGB randomizer. Number argument will decide difficulty. Will come later
var colours = generateColours(numSquares);

//Made the list of squares into a variable.
var squares = document.querySelectorAll(".square");
//Put a randomized colour into a variable to serve as the "correct" colour.
var pickedColour = pickColour();
//Span tag in the <h1>
var colourDisplay = document.getElementById("colourDisplay");
//Span tag to display a message when a user clicks on a square
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");


//Variables for the easy and hard buttons
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");

//Click funtion to set mode to easy or hard
easyBtn.addEventListener("click", function(){
    //Highlights the button
    this.classList.add("selected");
    hardBtn.classList.remove("selected");
    //Set number of squares displayed
    numSquares = 3;
    //Sets number of colours generated
    colours = generateColours(numSquares);
    pickedColour = pickColour();
    colourDisplay.textContent = pickedColour;

    for(var i = 0; i < squares.length; i++){

        //If there are still colours in the array (3 in easy mode)
        if(colours[i]){
            //Set each square to a colour in the colours array (now only 3)
            squares[i].style.backgroundColor = colours[i];
        }
        //Once there are no more colours generated
        else{
            //Hide all squares without colour
            squares[i].style.display = "none";
        }
    h1.style.backgroundColor = "steelblue";
}
});

//Same login here, just reversed. Basically resets everything to normal state
hardBtn.addEventListener("click", function(){
    this.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colours = generateColours(numSquares);
    pickedColour = pickColour();
    colourDisplay.textContent = pickedColour;

    for(var i = 0; i < squares.length; i++){
        //Restores all squares and reassigns colours
        squares[i].style.backgroundColor = colours[i];
        squares[i].style.display = "block";
    h1.style.backgroundColor = "steelblue";
}
});

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
        //Function that makes all the squares and the header the same colour as the "correct" square
        changeColours(clickedColour);
        h1.style.backgroundColor = pickedColour;
        //Change button text after winning
        reset.textContent = "Play Again?";
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
function pickColour(){
    var random = Math.floor(Math.random() * colours.length);
    return colours[random];
}

//Generate an array of randomized colours
function generateColours(num){
    var arrColours = [];

    for(var i = 0; i < num; i ++){
        arrColours.push(randomColour());
    }

    return arrColours;
}

//Randomized the red, green and blue values individually and concatenates them
function randomColour(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

//Added a click function to reset button.
reset.addEventListener("click", function(){
    //Generate new set of square colours
    colours = generateColours(numSquares);
    //Set each square to a colour in the array
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colours[i];
    }
    //Set a new "correct" colour
    pickedColour = pickColour();
    colourDisplay.textContent = pickedColour;
    //Reset <h1> background colour
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    this.textContent = "New Colours";
});