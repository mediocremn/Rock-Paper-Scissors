/*Rock Paper Scissors Folder - Javascript
This project is the classic "Rock, Paper, Scissors" game.*/

var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
/*Sets up initial scores to zero & prepares DOM variables.*/

var myFire;
/*Preps my fire animation random count variable.*/

function getComputerChoice() {
	const choices = ['rock', 'paper', 'scissors'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}
/*Determines computer's choice randomly (0-2).*/

function convertToWord (word) {
	if (word === "rock") return "Rock";
	if (word === "paper") return "Paper";
	if (word === "scissors") return "Scissors";
}
/*Converts lowercase choices to capitalized first-letter 
  choices.*/

function win(user, computer) {
	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "comp".fontsize(3).sup();
	const userChoice_div = document.getElementById(user);
	userScore++;
	userScore_span.innerHTML = userScore + " ";
	computerScore_span.innerHTML = " " + computerScore;
	result_p.innerHTML = `${convertToWord(user)}${smallUserWord} Beats ${convertToWord(computer)}${smallCompWord}. You Win!!!`;
	userChoice_div.classList.add('green-glow');
	setTimeout(() => userChoice_div.classList.remove('green-glow'), 700);
}
/*When user wins, this function is called to display message 
  results, update scoreboard, & display the green glow around 
  the user's choice for a short time.*/
 /*Notes: "fontsize(3).sup()" is used to add a superscript 
   of size 3 to the "user" & "comp" words.  Also "innerHTML" 
   is used to change/update values in HTML.
   "classList.add" is used to add the glow effect while
   "classList.remove" is used to remove the glow effect 
   after a short time passes by using "setTimeout()".
   Using the "`" key (below "Esc" key) along with `${...}` is 
   part of the new HTML while using "(() => ...)" is the new 
   Javascript that replaces functions names & curly brackets.*/

function lose(user, computer) {
	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "comp".fontsize(3).sup();
	const userChoice_div = document.getElementById(user);
	computerScore++;
	userScore_span.innerHTML = userScore + " ";
	computerScore_span.innerHTML = " " + computerScore;
	result_p.innerHTML = `${convertToWord(user)}${smallUserWord} Loses To ${convertToWord(computer)}${smallCompWord}. You Lose...`;
	userChoice_div.classList.add('red-glow');
	setTimeout(() => userChoice_div.classList.remove('red-glow'), 700);
}
/*When user loses, this function is called to display message 
  results, update scoreboard, & display the red glow around 
  the user's choice for a short time.*/
 /*Notes: "fontsize(3).sup()" is used to add a superscript 
   of size 3 to the "user" & "comp" words.  Also "innerHTML" 
   is used to change/update values in HTML.
   "classList.add" is used to add the glow effect while
   "classList.remove" is used to remove the glow effect 
   after a short time passes by using "setTimeout()".
   Using the "`" key (below "Esc" key) along with `${...}` is 
   part of the new HTML while using "(() => ...)" is the new 
   Javascript that replaces functions names & curly brackets.*/

function draw(user, computer) {
	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "comp".fontsize(3).sup();
	const userChoice_div = document.getElementById(user);
	userScore_span.innerHTML = userScore + " ";
	computerScore_span.innerHTML = " " + computerScore;
	result_p.innerHTML = `${convertToWord(user)}${smallUserWord} Ties ${convertToWord(computer)}${smallCompWord}. It's A Draw...`;
	userChoice_div.classList.add('gray-glow');
	setTimeout(() => userChoice_div.classList.remove('gray-glow'), 700);
}
/*When user ties, this function is called to display message 
  results, update scoreboard, & display the gray glow around 
  the user's choice for a short time.*/
 /*Notes: "fontsize(3).sup()" is used to add a superscript 
   of size 3 to the "user" & "comp" words.  Also "innerHTML" 
   is used to change/update values in HTML.
   "classList.add" is used to add the glow effect while
   "classList.remove" is used to remove the glow effect 
   after a short time passes by using "setTimeout()".
   Using the "`" key (below "Esc" key) along with `${...}` is 
   part of the new HTML while using "(() => ...)" is the new 
   Javascript that replaces functions names & curly brackets.*/

function game(userChoice) {

	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "rockscissors":
		case "paperrock":
		case "scissorspaper":
			win(userChoice, computerChoice);
			break;
		case "rockpaper":
		case "paperscissors":
		case "scissorsrock":
			lose(userChoice, computerChoice);
			break;
		case "rockrock":
		case "paperpaper":
		case "scissorsscissors":
			draw(userChoice, computerChoice);
			break;
	}
}
/*This determines the results between the user & the 
  computer by the "switch" statement by using "cases", 
  colons, & "breaks" for the different choices and then 
  calls the appropriate function of win, lose, or draw.*/

function fireFlicker() {
	const fire1_div = document.getElementById("fire1");
	const fire2_div = document.getElementById("fire2");
	const fire3_div = document.getElementById("fire3");
	const fire4_div = document.getElementById("fire4");
	const fire5_div = document.getElementById("fire5");
	/*This sets the variables for the DOM.*/

	fire1_div.style.visibility = "hidden";
	fire2_div.style.visibility = "hidden";
	fire3_div.style.visibility = "hidden";
	fire4_div.style.visibility = "hidden";
	fire5_div.style.visibility = "hidden";
	/*The above "hides" all of the animated "fires" initially.*/

	const randomNumber = Math.floor(Math.random() * 5);
	/*Gets a random value (0-4) to determine which "fire" effect.*/

	switch (randomNumber) {
		case 0:
			fire1_div.style.visibility = "visible";
			break;
		case 1:
			fire2_div.style.visibility = "visible";
			break;
		case 2:
			fire3_div.style.visibility = "visible";
			break;
		case 3:
			fire4_div.style.visibility = "visible";
			break;
		case 4:
			fire5_div.style.visibility = "visible";
			break;
	}
	/*This determines which "fire" to display at the moment 
	by the "switch" statement by using "cases", 
  	colons, & "breaks" for the different "fires" and then 
  	displaying it.*/
}
/*This function uses a random number to display a specific 
  "fire" and "hides" the remaining "fires".*/

function everFlicker() {
	myFire = setInterval(fireFlicker, 500);
}
/*This calls the "fireFlicker" function & changes/displays 
  the different "fires" quickly continuously.*/

function main() {

	everFlicker();

	rock_div.addEventListener('click', () => game("rock"));

	paper_div.addEventListener('click', () => game("paper"));

	scissors_div.addEventListener('click', () => game("scissors"));
}
/*This function is the main one that starts the game & 
  checks for a "click" by the user on the specific image 
  & then calls the game funcion.  It also calls the animated 
  "fire" function.  Note that the "click, () => game()" is the 
  new Javascrip.*/

main();
/*This calls the main function to start the game.*/
