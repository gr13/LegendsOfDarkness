let canvas, canvasContext;

let gameEngine;
let inputMain;
let startMenu;
let playerSelectionMenu;
let commonGraphics;
let mapTile;
let developerMenu;

let numberOfHumanPlayers = 3;
let numberOfAIPlayers = 0;
let playersArray = [];
let playersAIArray = [];

let screenType = SCREEN_LOADING;

window.onload = function(){
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    gameEngine = new gameEngineClass();
    inputMain = new inputClass();
    startMenu = new startMenuClass();
    playerSelectionMenu = new playerSelectMenuClass();
    commonGraphics = new commonGraphicsClass();
    mapTile = new mapClass({levelStart: 0});
    developerMenu = new developMenuClass();

    // playerSelectionMenu = new playerSelectionMenuClass();

    gameEngine.colorRect(0,0, canvas.width,canvas.height, 'black');
    gameEngine.colorText('LOADING IMAGES', canvas.width/2, canvas.height/2, 'white');
    screenType = SCREEN_LOADING;
    loadImages();
}

function startMenuScreen(){
    console.log("playersImgArray", playersImgArray);
    console.log("menuImgObject", menuImgObject);
    console.log("interfaceArrowsObject", interfaceArrowsObject);
    inputMain.setupInput();
    screenType = SCREEN_START_MENU;
    startMenu.draw();
}

function developMenuScreen(){
    screenType = SCREEN_DEVELOPER;
    developerMenu.draw();
}

function loadPlayerSelectionScreen(){
    setInterval(updateAll, 1000/FRAMES_PER_SECOND);
    screenType = SCREEN_PLAYER_SELECTION;
    mapTile.draw();
}

function startGame(){
    screenType = SCREEN_GAME;
    // playerSelectionMenu.draw();
}

function mouseClick(){
    if (screenType == SCREEN_START_MENU){
        startMenu.update();
    } else if (screenType == SCREEN_PLAYER_SELECTION){
        playerSelectionMenu.updateMouseClick();
    } else if (screenType == SCREEN_DEVELOPER){
        developerMenu.updateMouseClick();
    }



}

function updateAll(){
    if (screenType == SCREEN_GAME){
        drawAll();
    } else if (screenType == SCREEN_PLAYER_SELECTION){
        playerSelectionMenu.draw();
        playerSelectionMenu.updateDemoMotion();
    }
}

function drawAll(){
    mapTile.draw();

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
