# Memory Game Project

## Table of Contents

- [Instructions](#instructions)
- [scratch the project link](#scratch-the-project-link)
- [game Strategy](#game-Strategy)
- [steps to play the game](#steps-followed)
- [how to observe output](#how-to-observe-output)
- [how to play the game](#how-to-play-the-game)
- [contributing](#contributing)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

##scratch the project link

<https://github.com/udacity/fend-project-memory-game>
By using this link we can download the scratch project for memory game.

##Game Strategy

- Inside the app.js file, you will need to implement the Player and the Enemyclasses, using Object-Oriented JavaScript. Be sure to review all code comments written in app.js. Part of the code for the Enemy is provided to you, and you will need to complete the following:

- 	The Enemy function, which initiates the Enemy by:

- 	Loading the image by setting this.sprite to the appropriate image in the image folder (already provided)

- Setting the Enemy initial location (you need to implement)

- Setting the Enemy speed (you need to implement)

- The update method for the Enemy:

- Updates the Enemy location (you need to implement)

-	Handles collision with the Player (you need to implement)
You can add your own Enemy methods as needed. You will also need to implement the Player class, and you can use the Enemy class as an example on how to get started. At minimum you should implement the following:

- The Player function, which initiates the Player by:

-	Loading the image by setting this.sprite to the appropriate image in the image folder (use the code from the Enemy function as an example on how to do that)

-	Setting the Player initial location

- The update method for the Player (can be similar to the one for the Enemy)

-	The render method for the Player (use the code from the render method for the Enemy)

-	The handleInput method, which should receive user input, allowedKeys (the key which was pressed) and move the player according to that input. In particular:

-	Left key should move the player to the left, right key to the right, up should move the player up and down should move the player down

-	Recall that the player cannot move off screen (so you will need to check for that and handle appropriately)

-	If the player reaches the water the game should be reset by moving the player back to the initial location (you can write a separate reset Player method to handle that)
You can add your own Player methods as needed as well. Once you have completed implementing the Player and Enemy, you should instantiate them by:

-	Creating a new Player

-	Creating several new Enemies objects and placing them in an array called allEnemies
Beyond that, feel free to add additional functionality to the game. You can add more code to the app.js file and to the Enemy and Player classes to accomplish that.


##steps followed

**_to complete the project I have done the below steps_**

- I have download the `zip file` and placed it in my current working folder. Then ,I have extracted that zip file.

- First I have created an array variable called 'cards' and added an event listener called `click` to all the cards which means whenever I have clicked the card, the corresponding card should be displayed .

- After the first click is made, the timer will start which is written in ` timerStart()` function.

- The cards that are clicked are stored in an array variable called `cardviewed`. If the no of clicks become two i.e cardviewed length becomes two , Then the cards are compared for matching.

- If the cards are `matched` , then the cards remain displayed and cardviewed is assigned to nothing which means its length is `zero`.

- If the cards  are `not matched`, then after 100 millisec the cards are not displayed and cardviewed is assigned to nothing which means its length is `zero`.

- The no of moves in the game are stored in a variable called `moves` and it is displayed in the game and each time this value varies based on number of moves made by the player .

- Based on the number of moves the star rating is decreased which is provided in the `rating()` function.

- If the match count becomes sixteen which is stored in the variable `count` , which means the game is over then the timer is stopped which is written in  `interval` called by the `clearInterval()` function . The final `rating `for the playerin the game is provided in the `rating()`function.

- Also , after the game is over which means winning the game ,the **sweet alert** is displayed which provides messages like `congratulations`, 'star rating', 'time' taken to complete and 'playAgain' button .

- When the `playAgain` is clicked the game starts from the first.

- Also the game contains `restart` is clicked the game starts from first.

- The cards also shuffles when the playAgain is clicked and also when the game is restarted which is provided in `shuffle()`function.

##how to observe output

to observe the output open the `index.html` file in the working directory.

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
