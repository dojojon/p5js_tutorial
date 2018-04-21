

/** Buildings made from cells */
const cellWidth = 10;
const cellHeight = 10;

/** Padding for the lit window */
const windowPad = 2;

/** Time next refresh */
let redrawTime = 0;

/** set up the canvas */
function setup() {
    createCanvas(600, 400);
}

function draw() {

    /** Check to see if we need to redraw the image */
    if (redrawTime < millis()) {

        /** Set the image background */
        background('black');

        /** draw the stars */
        drawStars();

        /** draw a moon */
        drawMoon();

        /** Screen position of building start */
        let buildingStart = 0;

        /** Keep making making buildings while they are on the screen  */
        while (buildingStart < width) {

            /** Random width for the building */
            let buildingWidth = 2 + int(random(6));

            /** Random height for the building */            
            let buildHeight = 3+ int(random(20));
            
            /** calculate the starting position */
            buildingStart += int(random(2)) * cellWidth;
            
            /** call the draw building function */
            drawBuilding(buildingWidth, buildHeight, buildingStart);

            /** add the width of the building to the start so the next building will not overlap */
            buildingStart = buildingStart + buildingWidth * cellWidth;
            
            /** set the time to redraw next */
            redrawTime = millis() + 2000;
        }

    }

}

/** Draw a moon at a random position */
function drawMoon(){
    fill('white');
    ellipse(random(width),80,80,80);
}

/** Draw stars */
function drawStars(){

    fill('white');
    
    let n = 0;

    /** draw 200 stars */
    while(n < 200){

        let size = random( 1, 3);
        ellipse(random(width), random(height), size, size);
        n++;
    }

}

/** Draw a building */
function drawBuilding(buildingWidth, buildingHeight, start) {

    for (let c = 0; c < buildingWidth; c++) {

        for (let r = 0; r < buildingHeight; r++) {

            let x = start + c * cellWidth;
            let y = height - (r * cellHeight);
            drawBuildingCell(x, y)

        }

    }

}

/** Draw a building cell */
function drawBuildingCell(x, y) {

    noStroke();

    fill(100, 100, 100);
    rect(x, y, cellWidth, cellHeight);

    const showWindow = random(0, 10);
    
    if (showWindow > 7) {

        fill(120, 120, 220)
        rect(x + windowPad, y + windowPad, cellWidth - (windowPad * 2), cellHeight - windowPad * 2);

    }

}
