# Welcome to Color Splash!

<img height="400" src="https://imgur.com/YoPejqc"></img>

## About Color Splash

Color Splash is a game where the user has to “splash” (or fill) the entire playing board with one color type. 

This is a React single page application that uses React router to switch between the different views, and uses a json database to hold the game high scores.

## Home Screen

We have the title of the game, the current high scores list (and technically for this game, you’ll want a lower score to be higher on the high score list!), as well as the “Click to Play button”

Additionally, we have the Navigation bar at the top that has an option to click to go back to the home page (this page we’re currently looking at), as well as an option to play some music if you so desire. We’ll skip the music for now.

When you want to start, just click on the play button, and you’ll be directed to the game.

## Color Splash Game

On the game screen, you’ll find a list of game play instructions, and an option to change the board size. We’ll try out a board size of 10x10 here. For playing the game, essentially, the goal is to get the entire board “splashed” by one color overall. The bottom leftmost tile is the tile that starts the splash (so for this example, the splash is ——). To get more of the board in the splash, you have to click on other colored tiles that you want the splash color to change to.

Your score will be determined by the number of clicks it takes to splash the entire board. You get more points for every click, which is why a higher score is not the way to win here. The fewer clicks you take, the less points you get, so the more likely you’ll make it onto the leaderboard!

When you’ve splashed the entire board, click the see score button to continue to the score page.

## Score Page

On the Score page, you’ll be able to see the number of clicks (or turns) it took to complete the splash, and what the associated score is. You have the option to enter your name and click the submit score button so that it gets submitted along with your score (otherwise, how will we know if it’s you that has the best score or not?)

Once you’ve submitted your name, you can click “game over” to head to the end screen. Alternatively, also don’t forget that you still do have the option to go to the home page at any time from the navigation bar - if you think your score might have made it onto the leaderboard, you could click home now to find out!

## Game Over Screen

If you want to be able to try again, you can click “play again” to take you right back to the game board. See if you can beat your previous score!

Otherwise, you can click “credits” to see exactly who was behind the making of the app. Lastly, you’ll have another option here to click to go back to the home page, and then you can either go through everything to play again, or once it’s a little more officially up and running, you could pass it along to your family and friends for them to try out!
