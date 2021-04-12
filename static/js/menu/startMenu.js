class startMenuClass{
    constructor(){

    }
    draw(){
        commonGraphics.drawBackgroundImg();

        let options = {
            topLeftX: canvas.width * (1/6),
            topLeftY: canvas.height * (1/6),
            width: canvas.width * (2/3),
            height: canvas.height * (2/3),
            canvasWidth: canvas.width,
            canvasHeight: canvas.height,
            pageName: "Start Menu"
        }

        commonGraphics.drawMenuScreen(options);
        this._drawStartMenu(options);
    }

    update(){
        this._mouseHumanArrowsClick();
        this._mouseAIArrowsClick();
        this._startButtonClick();
        this._developButtonClick();
        if (screenType == SCREEN_START_MENU){
            this.draw();
        }
    }

    _mouseHumanArrowsClick(){
        if (mousePosition.x >= 370 && mousePosition.x <= 395 &&
            mousePosition.y >= 345 && mousePosition.y <= 370
        ) {
            if (numberOfHumanPlayers > 0){
                numberOfHumanPlayers--;
            }
        }
        if (mousePosition.x >= 421 && mousePosition.x <= 446 &&
            mousePosition.y >= 345 && mousePosition.y <= 370
        ) {
            if (numberOfHumanPlayers < 6){
                numberOfHumanPlayers++;
            }
        }
    }

    _mouseAIArrowsClick(){
        if (mousePosition.x >= 370 && mousePosition.x <= 395 &&
            mousePosition.y >= 395 && mousePosition.y <= 420
        ) {
            if (numberOfAIPlayers > 0){
                numberOfAIPlayers--;
            }
        }

        if (mousePosition.x >= 421 && mousePosition.x <= 446 &&
            mousePosition.y >= 395 && mousePosition.y <= 420
        ) {
            if (numberOfAIPlayers < 6){
                numberOfAIPlayers++;
            }
        }
    }

    _startButtonClick(){
        if (numberOfHumanPlayers == 0 && numberOfAIPlayers == 0){
            return;
        }
        if (mousePosition.x >= 240 && mousePosition.x <= 335 &&
            mousePosition.y >= 490 && mousePosition.y <= 530
        ) {
            loadPlayerSelectionScreen();
        }
    }

    _developButtonClick(){
        if (mousePosition.x >= 642 && mousePosition.x <= 780 &&
            mousePosition.y >= 490 && mousePosition.y <= 530
        ) {
            developMenuScreen();
        }
    }

    _drawStartMenu(options){

        let optionsStartMenu = {
            topLeftX: options.topLeftX + 50,
            topLeftY: options.topLeftY + 140,
            boxWidth: options.width - 100,
            boxHeight: options.height - 220
        };
        gameEngine.drawRectangle(optionsStartMenu);

        this._drawSelectNumberOfPlayersText(optionsStartMenu);

        this._drawSelectNumberOfPlayersArrows(optionsStartMenu);

        let optionButton = options;
        optionButton.displayedText = "START";
        optionButton.topLeftX = options.topLeftX + 60;
        optionButton.topLeftY = options.topLeftY + 350;
        commonGraphics.drawTextCenterAutoButton(optionButton);

        optionButton.displayedText = "DEVELOP";
        optionButton.topLeftX = options.topLeftX + 400;
        commonGraphics.drawTextCenterAutoButton(optionButton);


    }

    _drawSelectNumberOfPlayersArrows(options){

        const ARROW_IMG_MULTIPLIER = 0.05;
        let arrowHumanLeftImg = interfaceArrowsObject.theFiles[ARROW_LEFT].img;

        let optionsLeftHumanArrow = {
            img: arrowHumanLeftImg,
            x: 0,
            y: 0,
            width: arrowHumanLeftImg.width,
            height: arrowHumanLeftImg.height,
            canvasX: options.topLeftX + 150, // canvasX,
            canvasY: options.topLeftY + 75, // canvasY,
            canvasWidth: arrowHumanLeftImg.width * ARROW_IMG_MULTIPLIER, // canvasWidth,
            canvasHeight: arrowHumanLeftImg.height * ARROW_IMG_MULTIPLIER // canvasHeight
        }

        gameEngine.drawImg(optionsLeftHumanArrow);

        let arrowHumanRightImg = interfaceArrowsObject.theFiles[ARROW_RIGHT].img;

        let optionsRightHumanArrow = {
            img: arrowHumanRightImg,
            x: 0,
            y: 0,
            width: arrowHumanRightImg.width,
            height: arrowHumanRightImg.height,
            canvasX: options.topLeftX + 200, // canvasX,
            canvasY: options.topLeftY + 75, // canvasY,
            canvasWidth: arrowHumanLeftImg.width * ARROW_IMG_MULTIPLIER, // canvasWidth,
            canvasHeight: arrowHumanLeftImg.height * ARROW_IMG_MULTIPLIER // canvasHeight
        }
        gameEngine.drawImg(optionsRightHumanArrow);

        let optionsLeftAIArrow = {
            img: arrowHumanLeftImg,
            x: 0,
            y: 0,
            width: arrowHumanLeftImg.width,
            height: arrowHumanLeftImg.height,
            canvasX: options.topLeftX + 150, // canvasX,
            canvasY: options.topLeftY + 125, // canvasY,
            canvasWidth: arrowHumanLeftImg.width * ARROW_IMG_MULTIPLIER, // canvasWidth,
            canvasHeight: arrowHumanLeftImg.height * ARROW_IMG_MULTIPLIER // canvasHeight
        }

        gameEngine.drawImg(optionsLeftAIArrow);

        let optionsRightAIArrow = {
            img: arrowHumanRightImg,
            x: 0,
            y: 0,
            width: arrowHumanRightImg.width,
            height: arrowHumanRightImg.height,
            canvasX: options.topLeftX + 200, // canvasX,
            canvasY: options.topLeftY + 125, // canvasY,
            canvasWidth: arrowHumanLeftImg.width * ARROW_IMG_MULTIPLIER, // canvasWidth,
            canvasHeight: arrowHumanLeftImg.height * ARROW_IMG_MULTIPLIER // canvasHeight
        }
        gameEngine.drawImg(optionsRightAIArrow);
    }

    _drawSelectNumberOfPlayersText(options){
        let optionsText = {
            textX: options.topLeftX + 10,
            textY: options.topLeftY + 50,
            fillColor: 'white',
            fontSize: 30,
            fontStyle: FONT_STYLE,
            displayedText: "Number of players:"
        }

        gameEngine.colorText(optionsText);

        let optionsTextHuman = {
            textX: options.topLeftX + 10,
            textY: options.topLeftY + 100,
            fillColor: 'white',
            fontSize: 30,
            fontStyle: FONT_STYLE,
            displayedText: "Humans:"
        }

        gameEngine.colorText(optionsTextHuman);

        let optionsTextHumanNumber = optionsTextHuman;
        optionsTextHumanNumber.textX = optionsTextHuman.textX + 170;
        optionsTextHumanNumber.displayedText = numberOfHumanPlayers;

        gameEngine.colorText(optionsTextHumanNumber);

        let optionsTextAI = {
            textX: options.topLeftX + 10,
            textY: options.topLeftY + 150,
            fillColor: 'white',
            fontSize: 30,
            fontStyle: FONT_STYLE,
            displayedText: "AI:"
        }

        gameEngine.colorText(optionsTextAI);

        let optionsTextAINumber = optionsTextAI;
        optionsTextAINumber.textX = optionsTextAINumber.textX + 170;
        optionsTextAINumber.displayedText = numberOfAIPlayers;

        gameEngine.colorText(optionsTextAINumber);

    }

}
