COLOR SPLASH

Game Play Code Brainstorming:

1) Game play board populates each pixel component with a random color
    a. Each’s pixel’s initial state (color) will be equal to this random color
    
2) The game will start with the pixel located at [0, 0]
    a. This is the first pixel in the pixel group (the splash)
    
    b. Any pixels adjacent to the starting pixel ( [1, 0] or [0, 1] ) that share the same color as the starting pixel should be added to the splash as well
    
3) Each pixel should have an onClick event handler so that when that pixel is clicked, the splash’s color will change to be the same as the color of the pixel that was clicked on
4) 
    a. The splash will take over any pixels adjacent to it that also match the new color and them to the splash
    
        i. To determine this, each pixel in the splash will check the pixels directly surrounding them (left, right, up, down) to determine if their initial state (color) matches the color that was clicked on
        
4) The player should keep clicking on pixels (of the color that they want the splash to change to) in order to get the splash to fill up the entire playing board
