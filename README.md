# Trivia-Game

Using JavaScript for the logic and jQuery to manipulate HTML, create a trivia game with the following requirements:

- [x] Show only one question until the player answers it or their time runs out.

* If the player selects the correct answer:
- [x] Show a screen congratulating them for choosing the right option. 
- [x] After a few seconds, display the next question -- do this without user input.

* The scenario is similar for wrong answers and time-outs:
- [x] If the player runs out of time, tell the player that time's up and display the correct answer. 
- [x] If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. 
- [x] Wait a few seconds, then show the next question.

* On the final screen: 
- [x] Show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

# Game Play

When a user initially loads the page, the NES Classic Edition music auto-plays, and instructions prompt the user to select a game from the carosel. Clicking on a game provides each game's tagline. 

When a user clicks the START button, the music changes to match the selected game. 

Each round consists of five questions, and the user has five seconds to guess. After five seconds, the correct answer is revealed. If the user failed to choose, the correct answer is revealed along with a "Time's Up!" message. 

A user can only select another game at the completion of each round. 

The scoreboard on the right panel keeps track of the user's round stats and global game stats. 