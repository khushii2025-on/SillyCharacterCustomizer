/* 
Project: "Silly Character Customizer"
Objective:
You’ll create a small interactive webpage that generates a random, 
funny character with attributes like name, age, favorite food, and special powers. 
The user can also customize some aspects like updating the character's name or age.

Project Breakdown:
Declare, Initialize, and Update Variables:

You’ll create variables to store different character attributes 
(name, age, favorite food, etc.).
Users will have the option to update some of these variables, like 
changing the character’s name or age.

Use different data types for each attribute:
characterName (string)
Age (number)
Is the character a superhero? (boolean)
Special powers (array)
Favorite food (string)
Conduct Basic Math Operations:

You can randomly generate the character's age using math operations.
You could also include a small feature where the character's age increases 
or decreases when a button is clicked.
Create and Manipulate Strings:

Use string manipulation to generate a funny description of the character 
based on the data. You can concatenate strings or use template literals to 
display the character's attributes in a creative and humorous way.

*/

// Declare and initialize variables

let characterName = "Uchiha Itachi";
			 let age = Math.floor(Math.random() * 100) + 1;
			 let isSuperhero = true; 
			 let specialPowers = ["Amaterasu", "Susanoo", "FireBall Jutsu"];
			 let favouriteFood = "Shawarma";



// Function to generate a random character description

function updateName() {
  let newName = document.getElementById("nameInput").value;
  if (newName) characterName = newName;
  displayCharacter();
}


// Functions to update character's age

function increaseAge() {
  age++;
  displayCharacter();
}

function decreaseAge() {
  age--;
  displayCharacter();
}

age = Math.floor(Math.random() * 100) + 1; 

age++;

age--;

// Function to update the character's description after changing age



// Add event listeners for buttons using querySelector

function displayCharacter() {
  document.getElementById("ageDisplay").innerText = age;
  
  let description = `Meet ${characterName}, a ${age}-year-old ${isSuperhero ? "superhero" : "ordinary person"} who loves ${favoriteFood} and has powers like ${specialPowers.join(", ")}!`;
  
  document.getElementById("characterDescription").innerText = description;
}

displayCharacter();





