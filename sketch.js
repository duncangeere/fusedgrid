// A3
var r = new Rune({
    container: "body",
    width: 1588,
    height: 1123,
    debug: true
});

function graphic() {

    // User constants
    const squareSize = 700; // pixels
    const blocks = 3; // Currently only works with blocks = 3
    const cWidth = 87; // Width of commercial zone

    // Calculated constants
    const xMargin = (r.width - squareSize) / 2;
    const yMargin = (r.height - squareSize) / 2;
    const blockWidth = (squareSize - cWidth) / blocks

    // A group to contain the city
    const city = r.group(xMargin, yMargin);

    // Outer rectangle border
    const border = r.rect(0, 0, squareSize, squareSize, city).fill("none");

    // Draw commercial zones
    const commercial = r.group(0, 0, city);
    const cData = {
        xPos: Math.floor(Rune.random(0, blocks - 1)),
        yPos: Math.floor(Rune.random(0, blocks - 1))
    }

    drawCommercial(cData, blockWidth, cWidth, squareSize, commercial);

    // Draw block roads
    const blockRoads = r.group(0, 0, city);
    drawBlockRoads(cData, blockWidth, cWidth, squareSize, blockRoads);

    city.rotate(45, r.width/2, r.height/2)
}

// Draw it 
graphic();
r.draw();


// Function to draw the commercial zones
function drawCommercial(cData, blockWidth, cWidth, squareSize, grp) {

    // Figuring out all the relevant positions
    cData.xa = cData.xPos == 0 ? blockWidth : blockWidth * 2;
    cData.xb = (cData.xPos == 0 ? blockWidth : blockWidth * 2) + cWidth;
    cData.xbar1 = cData.xPos == 0 ? blockWidth + cWidth + (2 / 3 * blockWidth) : 2 / 3 * blockWidth;
    cData.xbar2 = cData.xPos == 0 ? blockWidth + cWidth + (4 / 3 * blockWidth) : 4 / 3 * blockWidth;
    cData.ya = cData.yPos == 0 ? blockWidth : blockWidth * 2;
    cData.yb = (cData.yPos == 0 ? blockWidth : blockWidth * 2) + cWidth;
    cData.ybar1 = cData.yPos == 0 ? blockWidth + cWidth + (2 / 3 * blockWidth) : 2 / 3 * blockWidth;
    cData.ybar2 = cData.yPos == 0 ? blockWidth + cWidth + (4 / 3 * blockWidth) : 4 / 3 * blockWidth;

    // horiz commercial
    r.rect(0, cData.ya, squareSize, cWidth, grp).fill("none")
    r.line(cData.xbar1, cData.ya, cData.xbar1, cData.yb, grp);
    r.line(cData.xbar2, cData.ya, cData.xbar2, cData.yb, grp);

    // vert commercial
    r.rect(cData.xa, 0, cWidth, squareSize, grp).fill("none")
    r.line(cData.xa, cData.ybar1, cData.xb, cData.ybar1, grp);
    r.line(cData.xa, cData.ybar2, cData.xb, cData.ybar2, grp);

}
// Function to draw the roads between the blocks
function drawBlockRoads(cData, blockWidth, cWidth, squareSize, grp) {
    if (cData.xPos == 0 && cData.yPos == 0) {

        // Draw between block roads
        r.line(squareSize - blockWidth, 0, squareSize - blockWidth, blockWidth, grp) // vert
        r.line(squareSize - blockWidth, blockWidth + cWidth, squareSize - blockWidth, squareSize, grp) // vert
        r.line(0, squareSize - blockWidth, blockWidth, squareSize - blockWidth, grp) // horiz
        r.line(blockWidth + cWidth, squareSize - blockWidth, squareSize, squareSize - blockWidth, grp) // horiz

        // Draw blocks
        drawQuarts(randInput(), blockWidth / 2, blockWidth / 2, blockWidth / 2, blockWidth / 2, grp)
        drawQuarts(randInput(), blockWidth + cWidth + blockWidth / 2, blockWidth / 2, blockWidth / 2, blockWidth / 2, grp)
        drawQuarts(randInput(), (blockWidth * 2) + cWidth + blockWidth / 2, blockWidth / 2, blockWidth / 2, blockWidth / 2, grp)

        drawQuarts(randInput(), blockWidth / 2, blockWidth + cWidth + blockWidth / 2, blockWidth / 2, blockWidth / 2, grp)
        drawQuarts(randInput(), blockWidth + cWidth + blockWidth / 2, blockWidth + cWidth + blockWidth / 2, blockWidth / 2, blockWidth / 2, grp)
        drawQuarts(randInput(), (blockWidth * 2) + cWidth + blockWidth / 2, blockWidth + cWidth + blockWidth / 2, blockWidth / 2, blockWidth / 2, grp)

        drawQuarts(randInput(), blockWidth / 2, (blockWidth * 2) + cWidth + blockWidth / 2, blockWidth / 2, blockWidth / 2, grp)
        drawQuarts(randInput(), blockWidth + cWidth + blockWidth / 2, (blockWidth * 2) + cWidth + blockWidth / 2, blockWidth / 2, blockWidth / 2, grp)
        drawQuarts(randInput(), (blockWidth * 2) + cWidth + blockWidth / 2, (blockWidth * 2) + cWidth + blockWidth / 2, blockWidth / 2, blockWidth / 2, grp)
    }

    if (cData.xPos == 0 && cData.yPos == 1) {
        r.line(squareSize - blockWidth, 0, squareSize - blockWidth, blockWidth * 2, grp) // vert
        r.line(squareSize - blockWidth, squareSize - blockWidth, squareSize - blockWidth, squareSize, grp) // vert
        r.line(0, blockWidth, blockWidth, blockWidth, grp) // horiz
        r.line(blockWidth + cWidth, blockWidth, squareSize, blockWidth, grp) // horiz

        // Draw blocks
        drawQuarts(randInput(), blockWidth / 2, blockWidth / 2, blockWidth / 2, blockWidth / 2, grp)
        drawQuarts(randInput(), blockWidth + cWidth + blockWidth / 2, blockWidth / 2, blockWidth / 2, blockWidth / 2, grp)
        drawQuarts(randInput(), (blockWidth * 2) + cWidth + blockWidth / 2, blockWidth / 2, blockWidth / 2, blockWidth / 2, grp)

        drawQuarts(randInput(), blockWidth / 2, blockWidth + blockWidth / 2, blockWidth / 2, blockWidth / 2, grp)
        drawQuarts(randInput(), blockWidth + cWidth + blockWidth / 2, blockWidth + blockWidth / 2, blockWidth / 2, blockWidth / 2, grp)
        drawQuarts(randInput(), (blockWidth * 2) + cWidth + blockWidth / 2, blockWidth + blockWidth / 2, blockWidth / 2, blockWidth / 2, grp)

        drawQuarts(randInput(), blockWidth / 2, (blockWidth * 2) + cWidth + blockWidth / 2, blockWidth / 2, blockWidth / 2, grp)
        drawQuarts(randInput(), blockWidth + cWidth + blockWidth / 2, (blockWidth * 2) + cWidth + blockWidth / 2, blockWidth / 2, blockWidth / 2, grp)
        drawQuarts(randInput(), (blockWidth * 2) + cWidth + blockWidth / 2, (blockWidth * 2) + cWidth + blockWidth / 2, blockWidth / 2, blockWidth / 2, grp)
    }

    if (cData.xPos == 1 && cData.yPos == 0) {
        r.line(blockWidth, 0, blockWidth, blockWidth, grp) // vert
        r.line(blockWidth, blockWidth + cWidth, blockWidth, squareSize, grp) // vert
        r.line(0, squareSize - blockWidth, blockWidth * 2, squareSize - blockWidth, grp) // horiz
        r.line(squareSize - blockWidth, squareSize - blockWidth, squareSize, squareSize - blockWidth, grp) // horiz

        // Draw blocks
        drawQuarts(randInput(), blockWidth / 2, blockWidth / 2, blockWidth / 2, blockWidth / 2, grp)
        drawQuarts(randInput(), blockWidth + blockWidth / 2, blockWidth / 2, blockWidth / 2, blockWidth / 2, grp)
        drawQuarts(randInput(), (blockWidth * 2) + cWidth + blockWidth / 2, blockWidth / 2, blockWidth / 2, blockWidth / 2, grp)

        drawQuarts(randInput(), blockWidth / 2, blockWidth + cWidth + blockWidth / 2, blockWidth / 2, blockWidth / 2, grp)
        drawQuarts(randInput(), blockWidth + blockWidth / 2, blockWidth + cWidth + blockWidth / 2, blockWidth / 2, blockWidth / 2, grp)
        drawQuarts(randInput(), (blockWidth * 2) + cWidth + blockWidth / 2, blockWidth + cWidth + blockWidth / 2, blockWidth / 2, blockWidth / 2, grp)

        drawQuarts(randInput(), blockWidth / 2, (blockWidth * 2) + cWidth + blockWidth / 2, blockWidth / 2, blockWidth / 2, grp)
        drawQuarts(randInput(), blockWidth + blockWidth / 2, (blockWidth * 2) + cWidth + blockWidth / 2, blockWidth / 2, blockWidth / 2, grp)
        drawQuarts(randInput(), (blockWidth * 2) + cWidth + blockWidth / 2, (blockWidth * 2) + cWidth + blockWidth / 2, blockWidth / 2, blockWidth / 2, grp)
    }

    if (cData.xPos == 1 && cData.yPos == 1) {
        r.line(blockWidth, 0, blockWidth, blockWidth * 2, grp) // vert
        r.line(blockWidth, squareSize - blockWidth, blockWidth, squareSize, grp) // vert
        r.line(0, blockWidth, blockWidth * 2, blockWidth, grp) // horiz
        r.line(squareSize - blockWidth, blockWidth, squareSize, blockWidth, grp) // horiz

        // Draw blocks
        drawQuarts(randInput(), blockWidth / 2, blockWidth / 2, blockWidth / 2, blockWidth / 2, grp)
        drawQuarts(randInput(), blockWidth + blockWidth / 2, blockWidth / 2, blockWidth / 2, blockWidth / 2, grp)
        drawQuarts(randInput(), (blockWidth * 2) + cWidth + blockWidth / 2, blockWidth / 2, blockWidth / 2, blockWidth / 2, grp)

        drawQuarts(randInput(), blockWidth / 2, blockWidth + blockWidth / 2, blockWidth / 2, blockWidth / 2, grp)
        drawQuarts(randInput(), blockWidth + blockWidth / 2, blockWidth + blockWidth / 2, blockWidth / 2, blockWidth / 2, grp)
        drawQuarts(randInput(), (blockWidth * 2) + cWidth + blockWidth / 2, blockWidth + blockWidth / 2, blockWidth / 2, blockWidth / 2, grp)

        drawQuarts(randInput(), blockWidth / 2, (blockWidth * 2) + cWidth + blockWidth / 2, blockWidth / 2, blockWidth / 2, grp)
        drawQuarts(randInput(), blockWidth + blockWidth / 2, (blockWidth * 2) + cWidth + blockWidth / 2, blockWidth / 2, blockWidth / 2, grp)
        drawQuarts(randInput(), (blockWidth * 2) + cWidth + blockWidth / 2, (blockWidth * 2) + cWidth + blockWidth / 2, blockWidth / 2, blockWidth / 2, grp)
    }
}

// Function to generate a random input array for the road network in a block
function randInput() {
    const input = [0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 3 + Math.floor(Rune.random(6)); i++) {
        input[Math.floor(Math.random() * input.length)] = 1;
    }

    if (input[1] || input[3] || input[6] || input[7]) {
        return input;
    } else {
        return randInput();
    }
}

// Function to draw a block
function drawQuarts(input, x, y, w, h, container) {

    // This function draws a quarter of a fused grid block
    // Input is an array of eight 1s and 0s
    // x and y are top left corner of grid
    // w and h are width and height of quarter grid

    const grid = r.group(x, y, container);


    const quarts = [];

    // Points in grid
    const xa = w / 5;
    const xb = w / 5 + w / 2.5;
    const xc = w / 5 + w / 2.5 + w / 2.5;

    const ya = h / 5;
    const yb = h / 5 + h / 2.5;
    const yc = h / 5 + h / 2.5 + h / 2.5;


    for (let rot = 0; rot < 360; rot += 90) {

        // Group to hold the quarter
        const quart = r.group(0, 0, grid)

        // Inner lines - first four
        if (input[1]) {
            r.line(xb, ya, xc, ya, quart)
        }

        if (input[3]) {
            r.line(xb, yb, xc, yb, quart)
        }

        if (input[6]) {
            r.line(xa, yb, xa, yc, quart)
        }

        if (input[7]) {
            r.line(xb, yb, xb, yc, quart)
        }

        // Inner lines - dependents
        if (input[1] || input[3] || input[6] || input[7]) {

            if (input[0] && (input[1] || input[4] || input[5])) {
                r.line(xa, ya, xb, ya, quart)
            }

            if (input[2] && (input[3] || input[5] || input[6] || input[7])) {
                r.line(xa, yb, xb, yb, quart)
            }

            if (input[4] && (input[0] || input[2] || input[6])) {
                r.line(xa, ya, xa, yb, quart)
            }

            if (input[5] && (input[1] || input[2] || input[3] || input[7])) {
                r.line(xb, ya, xb, yb, quart)
            }
        }

        // Rotate the quarter and push it into the quarts array
        quart.rotate(rot, 0, 0)
        quarts.push(quart)

    }

    return grid;
}