class developMenuClass{
    constructor(){

    }
    draw(){
        commonGraphics.drawBackgroundImg();

        let options = {
            topLeftX: canvas.width * (5/6),
            topLeftY: canvas.height * (5/6) + 50,
            displayedText:"BACK"
        }

        commonGraphics.drawTextCenterAutoButton(options);
    }
    updateMouseClick(){
        console.log("updateMouseClick");
        if (mousePosition.x >= 860 && mousePosition.x <= 945 &&
            mousePosition.y >= 705 && mousePosition.y <= 740
        ) {
            startMenuScreen();
        }

        this.draw();
        // else draw mouse coordinates on screen
        // draw mouse cols, row and place number
        let mouseBrickCol = Math.floor(mousePosition.x / mapTile.PLACE_H);
        let mouseBrickRow = Math.floor(mousePosition.y / mapTile.PLACE_W);
        console.log("mouseBrickCol", mouseBrickCol);
        console.log("mouseBrickRow", mouseBrickRow);
        let brickIndexUnderMouse = mapTile.rowColToArrayIndex(mouseBrickCol, mouseBrickRow);
        console.log("brickIndexUnderMouse", brickIndexUnderMouse);

        let optionsText = {
            displayedText: mouseBrickCol+","+mouseBrickRow+":"+brickIndexUnderMouse,
            centerX: mousePosition.x,
            centerY: mousePosition.y,
            fontSize: 25,
            fontStyle: FONT_STYLE,
            fillColor: "red"
        }
        if (mousePosition.x > 980){
            optionsText.centerX = mousePosition.x - 40;
        }
        console.log("optionsText", optionsText);
        console.log("mousePosition", mousePosition);
        gameEngine.centeredText(optionsText);

    }
}
