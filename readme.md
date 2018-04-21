# P5JS

[p5.js](https://p5js.org/) is a javascript library that has a set of drawing functionality.  It was created with the goal to make coding accessible for artists, designers, educators and beginners.

## Prerequisites

Whilst you don't need to use an IDE (Integrated Development Environment) and could use notepad.  It is recommended that you do.  We suggest VSCode along with a plug in.

## Plug In

We are going to use a couple VS Code extensions that work great with p5.js.

1. p5js Snippets
https://marketplace.visualstudio.com/items?itemName=acidic9.p5js-snippets

1. live-p5 https://marketplace.visualstudio.com/items?itemName=filipesabella.live-p5

Install these before you start the steps below.

##  These notes and code

These notes and code can be found on [GitHub](https://github.com/dojojon/p5js_tutorial).

## More Reading

[p5.js](https://p5js.org/) The home page of the p5.js library.

[Open Processing](https://www.openprocessing.org)  Web site with lots of examples with source code.  If you register you can also start publishing your own on the site and even edit and create directly on the site.

[The Coding Train](https://www.youtube.com/user/shiffman/playlists?sort=dd&shelf_id=14&view=50) Is a you tube chanel with lots of fund short coding examples, including lots of p5.js.

## Steps

1. Download or clone this project from GitHub or the Technical Mentor may have done this already for you.

1. Open the folder in VSCode.  You will see a bunch of JS files as example p5.js programmes.

1. Select one of these to view the code.  You will likely see a couple functions in the file ```setup()``` and ```draw()```

1. We can use the **live-p5** plug in to run this directly in VSCode.  Open the **Command Palette** (⇧⌘P (Windows, Linux Ctrl+Shift+P)).  Type ```p5``` and you should see the option ```Open live p5 panel```.  Select this.

    The ```Live p5 panel``` should open another view the the right of the code file.  In it you should see the  a preview of the source code on the right.

    Try a few of the other examples.

1. Lets create a new one.  In VS Code add a new file.  Add a new function to the top of the file as follows.

    ```javascript
    function setup(){

    }
    ```

1. This code will execute once when the script starts up.  It useful to push code in here to set up and data you need, define the size of the drawing area (canvas) etc.

    Add the following to set the canvas size.

    ```javascript
    function setup() {
        createCanvas(600, 480);
    }
    ```

1. Next we are going to set the background of the canvas to green. Add the following|:

    ```javascript
    function setup() {
        createCanvas(600, 480);
        background(0, 255, 0);
    }
    ```
    Check out the live preview.  Did it turn green?  If not close it and reopen it using the command pallet.

1. We can also add commands to draw onto the canvas here.  Add the following.

    ```javascript
    function setup() {
        createCanvas(600, 480);
        background(0, 0, 0);
        rect(20, 20, 100, 180);
    }
    ```
    You should now see a white rectangle on the screen. The first two parameters set the position, then second two set the size.

    Try changing them and see what happens.

1. White rectangle on black,  lets change that by adding a fill statement.  This will set the fill of any shapes that are drawn on the screen.

    ```javascript
    function setup() {
        createCanvas(600, 480);
        background(0, 0, 0);
        fill(255,0,0);
        rect(20, 20, 100, 180);
    }
    ```

1. OK,  Lets add another function ```draw()```.  This get called in a loop as quickly as your browser can run it.  We can use this to draw stuff that changes on the canvas.

    ```javascript
    function draw() {
        fill(0,0,255);
        ellipse(40, 40, 20, 20);
    }
    ```

    Did the preview update?  You should see a blue circle on the screen.  Try changing the parameters to change its position on the screen and its color.

1. Ok, but it is not very exciting.  Lets use the ```random()``` function to draw the circle in a different position each time the function in run.

    ```javascript
    function draw() {
        fill(0,0,255);
        ellipse(random(100), random(100), 20, 20);
    }
    ```

    The ```random(100)``` function returns a number less than 100.  You can also call it with two number a minimum and maximum.

    Try changing the parameters to print the circle in different positions.

1. p5.js sets an number of system variables that we can also use. Update the code as show below.

   ```javascript
    function draw() {
        fill(0,0,255);
        ellipse(random(width), random(height), 20, 20);
    }
    ```

1. We can also change the size the circles at draw.

    ```javascript
    function draw() {
        fill(0,0,255);
        ellipse(random(width), random(height), random(5, 20),random(5,20));
    }
    ```

1. Random colors, sure.  Colors are defined using 3 numbers Red, Green and Blue between 0 and 255.  We can use ```random()``` to set the color.

   ```javascript
    function draw() {
        fill(random(255),random(255),random(255));
        ellipse(random(width), random(height), random(5, 20),random(5,20));
    }
    ```

1. Lets add another shape that will get draw at the mouse position.

   ```javascript
    function draw() {
        fill(random(255),random(255),random(255));
        ellipse(random(width), random(height), random(5, 20),random(5,20));

        fill(255);
        ellipse(mouseX, mouseY, random(30),random(30));
        
    }
    ```


1. There are lots of functions and variables that can be used.  Take a look at the examples in this project and on the internet.  Get creative!!!