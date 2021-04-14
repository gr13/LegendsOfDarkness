class playerSelectMenuClass{
    _selectedPlayerToChoose = 0;
    _selectedPlayerSprite = 0;
    _demoFrame = 0;
    _demoFrameX = 0;
    _demoFrameY = 0;
    _demoStatus = 0;
    _demoSpriteCurrent = 0;

    _demoSpriteWidth = 450;
    _demoSpriteHeight = 270;

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
            pageName: "Player Select Menu"
        }
        commonGraphics.drawMenuScreen(options);

        this._drawLeftScreen(options);

        this._drawRightScreen(options);

        this._drawStartGameButton(options);
    }

    updateMouseClick(){
        this._arrowPlayerSelectionClick();
        this._arrowDemoSpriteArrowClick();
        this._buttonSelectClick();
        this._buttonStartGameClick();
    }

    updateDemoMotion(options){
        let theFiles = playersImgArray[this._selectedPlayerSprite].theFiles
        let correctSprite = false;

        while (correctSprite == false){
            correctSprite = this._demoFindCorrectSprite(theFiles, PLAYER_IMG_DEMO_ORDER[this._demoSpriteCurrent]);
            if (correctSprite == false){
                if (this._demoSpriteCurrent >= theFiles.length){
                    this._demoSpriteCurrent = 0;
                } else {
                    this._demoSpriteCurrent++;
                }
            }
        }

        if (this._demoFrame >= correctSprite.frames){
            this._demoFrame = 0;
            this._demoFrameX = 0;
            this._demoFrameY = 0;
            this._demoSpriteCurrent++;
            if (this._demoSpriteCurrent >= PLAYER_IMG_DEMO_ORDER.length){
                this._demoSpriteCurrent = 0;
            }
        }

        if (this._demoFrame == 0 ||
            this._demoFrame == 1*correctSprite.framesY ||
            this._demoFrame == 2*correctSprite.framesY ||
            this._demoFrame == 3*correctSprite.framesY
        ){
            this._demoFrameX = 0;
        } else this._demoFrameX++;

        if (this._demoFrame < 1*correctSprite.framesY){
            this._demoFrameY = 0;
        } else if (this._demoFrame < 2*correctSprite.framesY){
            this._demoFrameY = 1;
        } else if (this._demoFrame < 3*correctSprite.framesY){
            this._demoFrameY = 2;
        } else this._demoFrameY = 3

        this._demoFrame++;
        let optionsDemoSprite = {
            img: correctSprite.img,
            x: this._demoFrameX * correctSprite.spriteWidth, // x image
            y: this._demoFrameY * correctSprite.spriteHeight, // y image
            width: correctSprite.spriteWidth, // width image
            height: correctSprite.spriteHeight, // height image
            canvasX: this._demoSpriteWidth, // x canvas
            canvasY: this._demoSpriteHeight, // y canvas
            canvasWidth: correctSprite.spriteWidth, // width canvas
            canvasHeight: correctSprite.spriteHeight // height canvas
        };

        if (this._selectedPlayerSprite == 2){
            optionsDemoSprite = {
                img: correctSprite.img,
                x: this._demoFrameX * correctSprite.spriteWidth, // x image
                y: this._demoFrameY * correctSprite.spriteHeight, // y image
                width: correctSprite.spriteWidth, // width image
                height: correctSprite.spriteHeight, // height image
                canvasX: this._demoSpriteWidth, // x canvas
                canvasY: this._demoSpriteHeight, // y canvas
                canvasWidth: correctSprite.spriteWidth, // width canvas
                canvasHeight: correctSprite.spriteHeight// height canvas
            };
        }
        gameEngine.drawImg(optionsDemoSprite);

    }

    _drawLeftScreen(options){
        let optionsLeftMenu = {
            topLeftX: options.topLeftX + 50,
            topLeftY: options.topLeftY + 140,
            boxWidth: (options.width - 100) / 3,
            boxHeight: options.height - 220
        };
        gameEngine.drawRectangle(optionsLeftMenu);

        this._drawLeftMenuText(optionsLeftMenu);
        this._drawLeftMenuArrows(optionsLeftMenu);
        this._drawLeftMenuButtons(optionsLeftMenu);

    }

    _drawLeftMenuText(options){
        let optionsText = {
            textX: options.topLeftX,
            textY: options.topLeftY + 30,
            fillColor: 'white',
            fontSize: 25,
            fontStyle: FONT_STYLE,
            displayedText: "Select Player:"
        }

        gameEngine.colorText(optionsText);

        let optionsPlayerSelectedText = {
            displayedText: this._selectedPlayerToChoose,
            centerX: options.topLeftX + options.boxWidth/2,
            centerY: options.topLeftY + 80,
            fontSize: 30,
            fontStyle: FONT_STYLE,
            fillColor: "white"
        }
        gameEngine.centeredText(optionsPlayerSelectedText);

        let optionsTextName = {
            textX: options.topLeftX,
            textY: options.topLeftY + 150,
            fillColor: 'white',
            fontSize: 25,
            fontStyle: FONT_STYLE,
            displayedText: "Name:"
        }

        gameEngine.colorText(optionsTextName);

        let playerSelectedName = "Player name";
        if (playersArray[this._selectedPlayerToChoose]){
            playerSelectedName = playersArray[this._selectedPlayerToChoose].getPlayerImages().title;
        }

        let optionsPlayerName = {
            displayedText: playerSelectedName,
            centerX: options.topLeftX + options.boxWidth/2,
            centerY: options.topLeftY + 190,
            fontSize: 30,
            fontStyle: FONT_STYLE,
            fillColor: "white"
        }
        gameEngine.centeredText(optionsPlayerName);

    }

    _drawLeftMenuArrows(options){
        const ARROW_IMG_MULTIPLIER = 0.1;
        let arrowHumanLeftImg = interfaceArrowsObject.theFiles[ARROW_LEFT].img;
        const ARROW_Y = options.topLeftY + 45;
        let optionsLeftHumanArrow = {
            img: arrowHumanLeftImg,
            x: 0,
            y: 0,
            width: arrowHumanLeftImg.width,
            height: arrowHumanLeftImg.height,
            canvasX: options.topLeftX + 30, // canvasX,
            canvasY: ARROW_Y, // canvasY,
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
            canvasX: options.topLeftX + 110, // canvasX,
            canvasY: ARROW_Y, // canvasY,
            canvasWidth: arrowHumanLeftImg.width * ARROW_IMG_MULTIPLIER, // canvasWidth,
            canvasHeight: arrowHumanLeftImg.height * ARROW_IMG_MULTIPLIER // canvasHeight
        }
        gameEngine.drawImg(optionsRightHumanArrow);
    }

    _drawLeftMenuButtons(options){
        let optionButton = options;
        optionButton.displayedText = "SELECT";
        optionButton.topLeftX = options.topLeftX + 20;
        optionButton.topLeftY = options.topLeftY + 220;
        commonGraphics.drawTextCenterAutoButton(optionButton);
    }

    _drawRightScreen(options){
        let optionsRightMenu = {
            topLeftX: options.topLeftX + 50 + (options.width - 100) / 3,
            topLeftY: options.topLeftY + 140,
            boxWidth: (options.width - 100) * (2 / 3),
            boxHeight: options.height - 220
        };
        gameEngine.drawRectangle(optionsRightMenu);

        this._drawRightMenuText(optionsRightMenu);
        this._drawRightMenuArrows(optionsRightMenu);
    }

    _drawRightMenuText(options){
        let optionsPlayer = {
            displayedText: this._selectedPlayerSprite,
            centerX: options.topLeftX + 50,
            centerY: options.topLeftY + 140,
            fontSize: 30,
            fontStyle: FONT_STYLE,
            fillColor: "white"
        }
        gameEngine.centeredText(optionsPlayer);
    }

    _drawRightMenuArrows(options){
        const ARROW_IMG_MULTIPLIER = 0.19;
        let arrowHumanUpImg = interfaceArrowsObject.theFiles[ARROW_UP].img;
        const ARROW_X = options.topLeftX;
        let optionsUpHumanArrow = {
            img: arrowHumanUpImg,
            x: 0,
            y: 0,
            width: arrowHumanUpImg.width,
            height: arrowHumanUpImg.height,
            canvasX: ARROW_X, // canvasX,
            canvasY: options.topLeftY + 10, // canvasY,
            canvasWidth: arrowHumanUpImg.width * ARROW_IMG_MULTIPLIER, // canvasWidth,
            canvasHeight: arrowHumanUpImg.height * ARROW_IMG_MULTIPLIER // canvasHeight
        }

        gameEngine.drawImg(optionsUpHumanArrow);

        let arrowHumanDownImg = interfaceArrowsObject.theFiles[ARROW_DOWN].img;

        let optionsDownHumanArrow = {
            img: arrowHumanDownImg,
            x: 0,
            y: 0,
            width: arrowHumanDownImg.width,
            height: arrowHumanDownImg.height,
            canvasX: ARROW_X, // canvasX,
            canvasY: options.topLeftY + 150, // canvasY,
            canvasWidth: arrowHumanDownImg.width * ARROW_IMG_MULTIPLIER, // canvasWidth,
            canvasHeight: arrowHumanDownImg.height * ARROW_IMG_MULTIPLIER // canvasHeight
        }
        gameEngine.drawImg(optionsDownHumanArrow);
    }

    _drawStartGameButton(options){
        let optionButtonStart = options;
        optionButtonStart.displayedText = "START GAME";
        optionButtonStart.topLeftX = options.topLeftX + 60;
        optionButtonStart.topLeftY = options.topLeftY + 420;

        commonGraphics.drawTextCenterAutoButton(optionButtonStart);
    }


    _demoFindCorrectSprite(theFiles, spriteNum){
        for (var i = 0; i < theFiles.length; i++){
            if (theFiles[i].type == spriteNum){
                return theFiles[i];
            }
        }
        return false;
    }

    _arrowPlayerSelectionClick(){

        let playerUpdate = false;
        if (mousePosition.x >= 250 && mousePosition.x <= 300 &&
            mousePosition.y >= 320 && mousePosition.y <= 360
        ) {
            if (this._selectedPlayerToChoose > 0){
                this._selectedPlayerToChoose--;
                playerUpdate = true;
            }
        }
        if (mousePosition.x >= 330 && mousePosition.x <= 382 &&
            mousePosition.y >= 320 && mousePosition.y <= 360
        ) {
            if (this._selectedPlayerToChoose < numberOfHumanPlayers-1){
                this._selectedPlayerToChoose++;
                playerUpdate = true;
            }
        }


        if (playerUpdate) {
            this._demoFrame = 0;
            this._demoFrameX = 0;
            this._demoFrameY = 0;
            this._demoStatus = 0;
            this._demoSpriteCurrent = 0;

            if (playersArray[this._selectedPlayerToChoose]){
                let playerImg = playersArray[this._selectedPlayerToChoose].getPlayerImages();
                for (var sprite = 0; sprite < numberOfPlayersSprites; sprite++){
                    if (playersImgArray[sprite].title == playerImg.title){
                        this._selectedPlayerSprite = sprite;
                    }
                }
            }
        }
    }
    _arrowDemoSpriteArrowClick(){
        if (mousePosition.x >= 425 && mousePosition.x <= 500 &&
            mousePosition.y >= 280 && mousePosition.y <= 375
        ) {
            if (numberOfPlayersSprites > 0 &&
                this._selectedPlayerSprite < numberOfPlayersSprites -1){
                this._selectedPlayerSprite++;
            }
        }

        if (mousePosition.x >= 425 && mousePosition.x <= 500 &&
            mousePosition.y >= 420 && mousePosition.y <= 515
        ) {
            if (this._selectedPlayerSprite > 0 && numberOfPlayersSprites > 0){
                this._selectedPlayerSprite--;
            }
        }
    }

    _buttonSelectClick(){
        if (mousePosition.x >= 250 && mousePosition.x <= 366 &&
            mousePosition.y >= 505 && mousePosition.y <= 540
        ) {
            let optionsNewPlayerImg = {
                playerImages: {}
            }
            Object.assign(optionsNewPlayerImg.playerImages, playersImgArray[this._selectedPlayerSprite]);
            if (playersArray[this._selectedPlayerToChoose]){
                playersArray[this._selectedPlayerToChoose].setPlayerImages(optionsNewPlayerImg);
            } else {
                let newPlayer = new Player(optionsNewPlayerImg);
                playersArray[this._selectedPlayerToChoose] = newPlayer;
            }
        }
    }
    _buttonStartGameClick(){
        if (mousePosition.x >= 240 && mousePosition.x <= 580 &&
            mousePosition.y >= 565 && mousePosition.y <= 600
        ) {
            startGame();
        }
    }
}
