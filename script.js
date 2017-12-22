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
var resetBtn = document.getElementById("reset");

//Variable for the easy and hard buttons
var modeBtns = document.querySelectorAll(".mode");

//Instrad of checking each button serperately, loop through all buttons and add click listener
for(var i = 0; i < modeBtns.length; i ++){
    modeBtns[i].addEventListener("click", function(){
        //Hard coded for 2 buttons. Removes the .selected class from both
        modeBtns[0].classList.remove("selected");
        modeBtns[1].classList.remove("selected");
        //Adds the .selected class to the button that was clicked
        this.classList.add("selected");
        //Ternary operator that sets the number of squares depending of which button is clicked
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;

        reset();
    });
}
//Same function that was in the resetBtn event handler. Now separated.
function reset(){
    //Generate new set of square colours
    colours = generateColours(numSquares);
    //Set each square to a colour in the array
    for(var i = 0; i < squares.length; i++){
        //If there are more colours in the array (colours are generated depending on difficulty)
        if(colours[i]){
            //Assign colour to each square
            squares[i].style.backgroundColor = colours[i];
            //Make all squares visible in case they were not before
            squares[i].style.display = "block";
        }
        //If there are no more colours (Easy mode), hide the remaining squares
        else {
            squares[i].style.display = "none";
        }
    }
    //Set a new "correct" colour
    pickedColour = pickColour();
    colourDisplay.textContent = pickedColour;
    //Reset <h1> background colour
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetBtn.textContent = "New Colours";
}

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
        resetBtn.textContent = "Play Again?";
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

//Added a click listener that triggers the reset() function to reset button.
resetBtn.addEventListener("click", reset);