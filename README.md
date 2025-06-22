# odin_rock_paper_scissors
Practice Project: A 'Rock, Paper, Scissors' game

Update: The game is completed, but I didn't fully understand which of my decisions led me to complete the task.

The first five steps were relatively easy. Especially because the course creators left a lot of hints and even provided a template for the function with parameters already written.

At the sixth step, which was supposed to provide a full game (consisting of five rounds), I was really stuck. Initially, I wrote a plan for this step and tried to create pseudocode describing the actions. Thinking that this was enough, I started trying to change the existing code so that it would work for 5 rounds.

I was not successful. I made many attempts, but I could not figure out how exactly I should write the function, how exactly I should pass the updated values.

After that, I took a day off.

Returning to the project, I returned to the step of creating a plan, and I decided to take into account the previous steps. To begin with, I created a general scheme for two rounds, drawing it on paper.

Next, I used Figma to create a neater version of the same diagram, making some changes along the way.

After that, based on this diagram, I came to the conclusion that I could try to take into account what round is being played, and start or stop the game based on this score.

So I came up with a for loop, which I had previously known a little about from trying to learn Python (without success).

First, I put all the existing code into a new function. In the new function, I moved the variables for the player score to the beginning. There, I also added a new variable to take into account the round. After that, I created a loop. Inside this loop, based on if else, a message is displayed about what round it is.

This was not the goal of the assignment, but it made it easier for me to follow the progress of the game and understand where I was making mistakes.

Then I moved all the existing functions responsible for the round into this same loop. The loop itself was based on the currentRound variable as a counter variable. With each cycle, a value was added to the round until the number of cycles reached 5. Accordingly, this is equal to 5 rounds. After that, the cycle ended.

In order to take into account the game's achievements based on all cycles, I added another if else to the main function (under the cycle). Its task is to summarize the overall result based on the points that the players scored during all five rounds. The result is output to the console depending on the task.

Thus, my version of the game worked. But why - I still do not understand.

---

This project is a practical lesson for the Odin Project Course. The goal of this exercise is to create a game 'Rock, Paper, Scissors' in JavaScript. The game will be player via console, so no GUI elements is needed. The game will include two players - human and computer. Each player will choose their action. Whoever wins round will receive one score point. The game will have 5 rounds. After all 5 rounds is completed, the overall winner will be anounced via message in console.

