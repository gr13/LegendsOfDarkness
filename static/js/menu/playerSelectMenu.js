class playerSelectMenuClass{
    #selectedPlayerToChoose = 0;
    #selectedPlayerSprite = 0;
    #demoFrame = 0;
    #demoFrameX = 0;
    #demoFrameY = 0;
    #demoStatus = 0;
    #demoSpriteCurrent = 0;

    #demoSpriteWidth = 450;
    #demoSpriteHeight = 270;

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

        this.#drawLeftScreen(options);

        this.#drawRightScreen(options);

        this.#drawStartGameButton(options);
    }

    updateMouseClick(){
        this.#arrowPlayerSelectionClick();
        this.#arrowDemoSpriteArrowClick();
        this.#buttonSelectClick();
        this.#buttonStartGameClick();
    }

    updateDemoMotion(options){
        let theFiles = playersImgArray[this.#selectedPlayerSprite].theFiles
        let correctSprite = false;

        while (correctSprite == false){
            correctSprite = this.#demoFindCorrectSprite(theFiles, PLAYER_IMG_DEMO_ORDER[this.#demoSpriteCurrent]);
            if (correctSprite == false){
                if (this.#demoSpriteCurrent >= theFiles.length){
                    this.#demoSpriteCurrent = 0;
                } else {
                    this.#demoSpriteCurrent++;
                }
            }
        }

        if (this.#demoFrame >= correctSprite.frames){
            this.#demoFrame = 0;
            this.#demoFrameX = 0;
            this.#demoFrameY = 0;
            this.#demoSpriteCurrent++;
            if (this.#demoSpriteCurrent >= PLAYER_IMG_DEMO_ORDER.length){
                this.#demoSpriteCurrent = 0;
            }
        }

        if (this.#demoFrame == 0 ||
            this.#demoFrame == 1*correctSprite.framesY ||
            this.#demoFrame == 2*correctSprite.framesY ||
            this.#demoFrame == 3*correctSprite.framesY
        ){
            this.#demoFrameX = 0;
        } else this.#demoFrameX++;

        if (this.#demoFrame < 1*correctSprite.framesY){
            this.#demoFrameY = 0;
        } else if (this.#demoFrame < 2*correctSprite.framesY){
            this.#demoFrameY = 1;
        } else if (this.#demoFrame < 3*correctSprite.framesY){
            this.#demoFrameY = 2;
        } else this.#demoFrameY = 3

        this.#demoFrame++;
        let optionsDemoSprite = {
            img: correctSprite.img,
            x: this.#demoFrameX * correctSprite.spriteWidth, // x image
            y: this.#demoFrameY * correctSprite.spriteHeight, // y image
            width: correctSprite.spriteWidth, // width image
            height: correctSprite.spriteHeight, // height image
            canvasX: this.#demoSpriteWidth, // x canvas
            canvasY: this.#demoSpriteHeight, // y canvas
            canvasWidth: correctSprite.spriteWidth/2, // width canvas
            canvasHeight: correctSprite.spriteHeight/2 // height canvas
        };

        if (this.#selectedPlayerSprite == 2){
            optionsDemoSprite = {
                img: correctSprite.img,
                x: this.#demoFrameX * correctSprite.spriteWidth, // x image
                y: this.#demoFrameY * correctSprite.spriteHeight, // y image
                width: correctSprite.spriteWidth, // width image
                height: correctSprite.spriteHeight, // height image
                canvasX: this.#demoSpriteWidth, // x canvas
                canvasY: this.#demoSpriteHeight, // y canvas
                canvasWidth: correctSprite.spriteWidth*0.4, // width canvas
                canvasHeight: correctSprite.spriteHeight*0.4// height canvas
            };
        }
        gameEngine.drawImg(optionsDemoSprite);

    }

    #drawLeftScreen(options){
        let optionsLeftMenu = {
            topLeftX: options.topLeftX + 50,
            topLeftY: options.topLeftY + 140,
            boxWidth: (options.width - 100) / 3,
            boxHeight: options.height - 220
        };
        gameEngine.drawRectangle(optionsLeftMenu);

        this.#drawLeftMenuText(optionsLeftMenu);
        this.#drawLeftMenuArrows(optionsLeftMenu);
        this.#drawLeftMenuButtons(optionsLeftMenu);

    }

    #drawLeftMenuText(options){
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
            displayedText: this.#selectedPlayerToChoose,
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
        if (playersArray[this.#selectedPlayerToChoose]){
            playerSelectedName = playersArray[this.#selectedPlayerToChoose].getPlayerImages().title;
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

    #drawLeftMenuArrows(options){
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

    #drawLeftMenuButtons(options){
        let optionButton = options;
        optionButton.displayedText = "SELECT";
        optionButton.topLeftX = options.topLeftX + 20;
        optionButton.topLeftY = options.topLeftY + 220;
        commonGraphics.drawTextCenterAutoButton(optionButton);
    }

    #drawRightScreen(options){
        let optionsRightMenu = {
            topLeftX: options.topLeftX + 50 + (options.width - 100) / 3,
            topLeftY: options.topLeftY + 140,
            boxWidth: (options.width - 100) * (2 / 3),
            boxHeight: options.height - 220
        };
        gameEngine.drawRectangle(optionsRightMenu);

        this.#drawRightMenuText(optionsRightMenu);
        this.#drawRightMenuArrows(optionsRightMenu);
    }

    #drawRightMenuText(options){
        let optionsPlayer = {
            displayedText: this.#selectedPlayerSprite,
            centerX: options.topLeftX + 50,
            centerY: options.topLeftY + 140,
            fontSize: 30,
            fontStyle: FONT_STYLE,
            fillColor: "white"
        }
        gameEngine.centeredText(optionsPlayer);
    }

    #drawRightMenuArrows(options){
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

    #drawStartGameButton(options){
        let optionButtonStart = options;
        optionButtonStart.displayedText = "START GAME";
        optionButtonStart.topLeftX = options.topLeftX + 60;
        optionButtonStart.topLeftY = options.topLeftY + 420;

        commonGraphics.drawTextCenterAutoButton(optionButtonStart);
    }


    #demoFindCorrectSprite(theFiles, spriteNum){
        for (var i = 0; i < theFiles.length; i++){
            if (theFiles[i].type == spriteNum){
                return theFiles[i];
            }
        }
        return false;
    }

    #arrowPlayerSelectionClick(){

        let playerUpdate = false;
        if (mousePosition.x >= 250 && mousePosition.x <= 300 &&
            mousePosition.y >= 320 && mousePosition.y <= 360
        ) {
            if (this.#selectedPlayerToChoose > 0){
                this.#selectedPlayerToChoose--;
                playerUpdate = true;
            }
        }
        if (mousePosition.x >= 330 && mousePosition.x <= 382 &&
            mousePosition.y >= 320 && mousePosition.y <= 360
        ) {
            if (this.#selectedPlayerToChoose < numberOfHumanPlayers-1){
                this.#selectedPlayerToChoose++;
                playerUpdate = true;
            }
        }


        if (playerUpdate) {
            this.#demoFrame = 0;
            this.#demoFrameX = 0;
            this.#demoFrameY = 0;
            this.#demoStatus = 0;
            this.#demoSpriteCurrent = 0;

            if (playersArray[this.#selectedPlayerToChoose]){
                let playerImg = playersArray[this.#selectedPlayerToChoose].getPlayerImages();
                for (var sprite = 0; sprite < numberOfPlayersSprites; sprite++){
                    if (playersImgArray[sprite].title == playerImg.title){
                        this.#selectedPlayerSprite = sprite;
                    }
                }
            }
        }
    }
    #arrowDemoSpriteArrowClick(){
        if (mousePosition.x >= 425 && mousePosition.x <= 500 &&
            mousePosition.y >= 280 && mousePosition.y <= 375
        ) {
            if (numberOfPlayersSprites > 0 &&
                this.#selectedPlayerSprite < numberOfPlayersSprites -1){
                this.#selectedPlayerSprite++;
            }
        }

        if (mousePosition.x >= 425 && mousePosition.x <= 500 &&
            mousePosition.y >= 420 && mousePosition.y <= 515
        ) {
            if (this.#selectedPlayerSprite > 0 && numberOfPlayersSprites > 0){
                this.#selectedPlayerSprite--;
            }
        }
    }

    #buttonSelectClick(){
        if (mousePosition.x >= 250 && mousePosition.x <= 366 &&
            mousePosition.y >= 505 && mousePosition.y <= 540
        ) {
            let optionsNewPlayerImg = {
                playerImages: {}
            }
            Object.assign(optionsNewPlayerImg.playerImages, playersImgArray[this.#selectedPlayerSprite]);
            if (playersArray[this.#selectedPlayerToChoose]){
                playersArray[this.#selectedPlayerToChoose].setPlayerImages(optionsNewPlayerImg);
            } else {
                let newPlayer = new Player(optionsNewPlayerImg);
                playersArray[this.#selectedPlayerToChoose] = newPlayer;
            }
        }
    }
    #buttonStartGameClick(){
        if (mousePosition.x >= 240 && mousePosition.x <= 580 &&
            mousePosition.y >= 565 && mousePosition.y <= 600
        ) {
            startGame();
        }
    }
}
