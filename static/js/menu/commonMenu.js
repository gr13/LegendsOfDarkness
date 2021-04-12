class commonGraphicsClass{
    constructor(){

    }

    drawMenuScreen(options){
        this._drawMenuBackground(options);
        this._drawTitleCenteredAuto(options);
        this._drawPageTitle(options);
    }

    _drawMenuBackground(options){
        let menuBackground = menuImgObject.theFiles[FULL_SCREEN_PANNEL_1000_700].img;
        options = {
            img: menuBackground,
            x: 0,
            y: 0,
            width: menuBackground.width,
            height: menuBackground.height,
            canvasX: options.topLeftX, // canvasX,
            canvasY: options.topLeftY, // canvasY,
            canvasWidth: options.width, // canvasWidth,
            canvasHeight: options.height // canvasHeight
        };
        gameEngine.drawImg(options);
    }

    _drawPageTitle(options){
        let optionsScreenTitle = options;
        optionsScreenTitle.displayedText = options.pageName;
        optionsScreenTitle.fontSize = 25;
        optionsScreenTitle.fontStyle = FONT_STYLE;
        optionsScreenTitle.fillColor = "white";
        optionsScreenTitle.centerX = canvas.width / 2;
        optionsScreenTitle.centerY = options.topLeftY + 120;
        gameEngine.centeredText(optionsScreenTitle);
    }

    drawBackgroundImg(){
        let options = {
            img: backgroundImg,
            x: 70,
            y: 70,
            width: backgroundImg.width - 140,
            height: backgroundImg.height - 140,
            canvasX: 0,
            canvasY: 0,
            canvasWidth: canvas.width,
            canvasHeight: canvas.height
        }
        gameEngine.drawImg(options);
    }

    _drawTitleCenteredAuto(options){
        // canvasWidth: canvas.width,
        // canvasHeight: canvas.height
        let optionsTextWidth = {
            displayedText: GAME_TITLE,
            fontSize: 30,
            fontStyle: FONT_STYLE,
            fillColor: "white"
        }
        let centerText = gameEngine.getTextMiddle(optionsTextWidth);



        const MENU_TITLE_IMG_LEFT = menuImgObject.theFiles[TITLE_PURPLE_LEFT].img;
        const MENU_TITLE_IMG_CENTER  = menuImgObject.theFiles[TITLE_PURPLE_CENTER_REPEATING].img;
        const MENU_TITLE_IMG_RIGHT = menuImgObject.theFiles[TITLE_PURPLE_RIGHT].img;

        const MENU_GAME_TITLE_LEFT_X = options.canvasWidth / 2 - centerText - 50;
        const MENU_GAME_TITLE_Y = options.topLeftY + 20;
        const MENU_TITLE_IMG_LEFT_WIDTH = MENU_TITLE_IMG_LEFT.width * MENU_IMG_SIZE_WIDTH_MULTIPLIER;
        const MENU_TITLE_IMG_HEIGHT = MENU_TITLE_IMG_LEFT.height * MENU_IMG_SIZE_HEIGHT_MULTIPLIER;

        let optionsLeft = {
            img: MENU_TITLE_IMG_LEFT,
            x: 0,
            y: 0,
            width: MENU_TITLE_IMG_LEFT.width,
            height: MENU_TITLE_IMG_LEFT.height,
            canvasX: MENU_GAME_TITLE_LEFT_X,
            canvasY: MENU_GAME_TITLE_Y,
            canvasWidth: MENU_TITLE_IMG_LEFT_WIDTH,
            canvasHeight: MENU_TITLE_IMG_HEIGHT
        }
        gameEngine.drawImg(optionsLeft);


        const MENU_GAME_TITLE_CENTER_X = MENU_GAME_TITLE_LEFT_X + MENU_TITLE_IMG_LEFT_WIDTH;
        const MENU_TITLE_IMG_CENTER_WIDTH = MENU_TITLE_IMG_CENTER.width;
        let menuButtonCenterWidth = MENU_TITLE_IMG_CENTER_WIDTH;
        if (MENU_TITLE_IMG_CENTER_WIDTH < centerText){
            menuButtonCenterWidth = (centerText - (MENU_TITLE_IMG_LEFT_WIDTH-60)) * 2;
        }

        let optionsCenter = {
            img: MENU_TITLE_IMG_CENTER,
            x: 0,
            y: 0,
            width: MENU_TITLE_IMG_CENTER.width,
            height: MENU_TITLE_IMG_CENTER.height,
            canvasX: MENU_GAME_TITLE_CENTER_X,
            canvasY: MENU_GAME_TITLE_Y,
            canvasWidth: menuButtonCenterWidth,
            canvasHeight: MENU_TITLE_IMG_HEIGHT
        }

        gameEngine.drawImg(optionsCenter);

        const MENU_GAME_TITLE_RIGHT_X = options.canvasWidth / 2 + centerText + 50 - MENU_TITLE_IMG_LEFT_WIDTH;

        let optionsRight = {
            img: MENU_TITLE_IMG_RIGHT,
            x: 0,
            y: 0,
            width: MENU_TITLE_IMG_RIGHT.width,
            height: MENU_TITLE_IMG_RIGHT.height,
            canvasX: MENU_GAME_TITLE_RIGHT_X,
            canvasY: MENU_GAME_TITLE_Y,
            canvasWidth: MENU_TITLE_IMG_LEFT_WIDTH,
            canvasHeight: MENU_TITLE_IMG_HEIGHT
        }
        gameEngine.drawImg(optionsRight);

        let optionsText = {
            displayedText: GAME_TITLE,
            centerX: options.canvasWidth/2,
            centerY: MENU_GAME_TITLE_Y + 60,
            fontSize: 30,
            fontStyle: FONT_STYLE,
            fillColor: "white"
        }
        gameEngine.centeredText(optionsText);
    }

    drawTextCenterAutoButton(options){
        let optionsTextWidth = {
            displayedText: options.displayedText,
            fontSize: 30,
            fontStyle: FONT_STYLE,
            fillColor: "white"
        }
        let centerText = gameEngine.getTextMiddle(optionsTextWidth);

        let menuButtonLeftImg = menuImgObject.theFiles[MENU_GREEN_LONG_BUTTON_LEFT].img;
        const MENU_BUTTON_LEFT_X = options.topLeftX;
        const MENU_BUTTON_Y = options.topLeftY;
        const MENU_BUTTON_IMG_LEFT_WIDTH = menuButtonLeftImg.width * MENU_IMG_SIZE_WIDTH_MULTIPLIER;
        const MENU_BUTTON_IMG_LEFT_HEIGHT = menuButtonLeftImg.height * MENU_IMG_SIZE_HEIGHT_MULTIPLIER;
        let optionsLeft = {
            img: menuButtonLeftImg,
            x: 0,
            y: 0,
            width: menuButtonLeftImg.width,
            height: menuButtonLeftImg.height,
            canvasX: MENU_BUTTON_LEFT_X,
            canvasY: MENU_BUTTON_Y,
            canvasWidth: MENU_BUTTON_IMG_LEFT_WIDTH,
            canvasHeight: MENU_BUTTON_IMG_LEFT_HEIGHT
        }
        gameEngine.drawImg(optionsLeft);

        let menuButtonCenterImg = menuImgObject.theFiles[MENU_GREEN_LONG_BUTTON_CENTER].img;

        const MENU_GAME_TITLE_CENTER_X = MENU_BUTTON_LEFT_X + MENU_BUTTON_IMG_LEFT_WIDTH;

        let menuButtonCenterWidth = MENU_BUTTON_IMG_LEFT_WIDTH;
        if (MENU_BUTTON_IMG_LEFT_WIDTH - 20 < centerText){
            menuButtonCenterWidth = (centerText - (MENU_BUTTON_IMG_LEFT_WIDTH-20)) * 2;
        }

        let optionsCenter = {
            img: menuButtonCenterImg,
            x: 0,
            y: 0,
            width: menuButtonCenterImg.width,
            height: menuButtonCenterImg.height,
            canvasX: MENU_GAME_TITLE_CENTER_X,
            canvasY: MENU_BUTTON_Y,
            canvasWidth: menuButtonCenterWidth,
            canvasHeight: menuButtonCenterImg.height * MENU_IMG_SIZE_HEIGHT_MULTIPLIER
        }
        gameEngine.drawImg(optionsCenter);

        let menuButtonRightImg = menuImgObject.theFiles[MENU_GREEN_LONG_BUTTON_RIGHT].img;
        let optionsRight = {
            img: menuButtonRightImg,
            x: 0,
            y: 0,
            width: menuButtonRightImg.width,
            height: menuButtonRightImg.height,
            canvasX: MENU_BUTTON_LEFT_X + 20 + centerText*2 - MENU_BUTTON_IMG_LEFT_WIDTH,
            canvasY: MENU_BUTTON_Y,
            canvasWidth: MENU_BUTTON_IMG_LEFT_WIDTH,
            canvasHeight: MENU_BUTTON_IMG_LEFT_HEIGHT
        }
        gameEngine.drawImg(optionsRight);

        let optionsText = {
            displayedText: options.displayedText,
            textX: MENU_BUTTON_LEFT_X + 20,
            textY: MENU_BUTTON_Y + 40,
            fontSize: 25,
            fontStyle: FONT_STYLE,
            fillColor: "white"
        }
        gameEngine.colorText(optionsText);

    }
}
