COLOR SPLASH

Game Play Code Brainstorming:

1) Game play board populates each pixel component with a random color

    a. Each’s pixel’s initial state (color) will be equal to this random color
    
2) The game will start with the pixel located at [0, 0]

    a. This is the first pixel in the pixel group (the splash)
    
    b. Any pixels adjacent to the starting pixel ( [1, 0] or [0, 1] ) that share the same color as the starting pixel should be added to the splash as well
    
3) Each pixel should have an onClick event handler so that when that pixel is clicked, the splash’s color will change to be the same as the color of the pixel that was clicked on

    a. The splash will take over any pixels adjacent to it that also match the new color and them to the splash
    
    b. To determine this, each pixel in the splash will check the pixels directly surrounding them (left, right, up, down) to determine if their initial state (color) matches the color that was clicked on
        
4) The player should keep clicking on pixels (of the color that they want the splash to change to) in order to get the splash to fill up the entire playing board



      // Each pixel that has a color that matches the splash color 
      // should be added to the splash colors array
      //  -- specifically
      // 1) initialize splash pixels an empty array of false rowsCols x rowsCols
      // 2) on click >> If any pixel matches clicked color, change its isSplash to true or false inside splash pixels

      // Any time a new color is clicked, all pixels in the splash 
      // colors array should change to the new color selected
      // 3) Change colors on the DOM to reflect isSplash state, so any pixels that are true, will have a bg color of the splash color

      // we initialize an array of all false
      // If state is in Pixel versus
      // establish which pixels are true or false
      // Map through splashPixels, if splash color = pixel.bgColor, then setState isSplash = true
      // THEN
      // For each pixel that turns out to be true, change its bg color to match splash color
      // splashPixel.map((elem,index) => elem.map((elem2,index2) => splashPixel[index2][index] = )

      // If state is in Game
      // splashPixel.map((elem,index) => )