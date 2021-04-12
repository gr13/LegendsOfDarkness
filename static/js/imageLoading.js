let backgroundImg = new Image();
let picsToLoad = 0; // sets automatically in loadImages()

const TYPE_BACKGROUND_IMG = 0;
const SPRITE_PLAYER = 1;
const MENU_IMG = 2;
const INTERFACE_ARROWS = 3;

const PLAYER_IMG_PATH = 'images/sprites/players';
const INTEFACE_IMG_PATH = 'images/menu';

// Player
let playersImgArray = [];
let numberOfPlayersSprites = 0;
const PLAYER_IMG_IDLE_LEFT = 0;
const PLAYER_IMG_IDLE_RIGHT = 1;
const PLAYER_IMG_WALK_LEFT = 2;
const PLAYER_IMG_WALK_RIGHT = 3;
const PLAYER_IMG_RUN_LEFT = 4;
const PLAYER_IMG_RUN_RIGHT = 5;
const PLAYER_IMG_JUMP_LEFT = 6;
const PLAYER_IMG_JUMP_RIGHT = 7;
const PLAYER_IMG_DEFEND_LEFT = 8;
const PLAYER_IMG_DEFEND_RIGHT = 9;
const PLAYER_IMG_DEFEND1_LEFT = 10;
const PLAYER_IMG_DEFENT1_RIGHT = 11;
const PLAYER_IMG_ATTACK_LEFT = 12;
const PLAYER_IMG_ATTACK_RIGHT = 13;
const PLAYER_IMG_ATTACK1_LEFT = 14;
const PLAYER_IMG_ATTACK1_RIGHT = 15;
const PLAYER_IMG_DIE_LEFT = 16;
const PLAYER_IMG_DIE_RIGHT = 17;

const PLAYER_FACE_SIDE_LEFT = 0;
const PLAYER_FACE_SIDE_RIGHT = 1;

const PLAYER_IMG_DEMO_ORDER = [0, 2, 4, 6, 8, 10, 12, 14, 16];

// Menu
let menuImgObject = {};
const FULL_SCREEN_PANNEL_1000_700 = 0;
const INNER_PANEL_COLOR = 1;
const TITLE_PURPLE_LEFT = 2;
const TITLE_PURPLE_RIGHT = 3;
const TITLE_PURPLE_CENTER_REPEATING = 4;
const MENU_GREEN_LONG_BUTTON_LEFT = 5;
const MENU_GREEN_LONG_BUTTON_RIGHT = 6;
const MENU_GREEN_LONG_BUTTON_CENTER = 7;

let interfaceArrowsObject = {};
const ARROW_UP = 0;
const ARROW_RIGHT = 1;
const ARROW_DOWN = 2;
const ARROW_LEFT = 3;


const VIKING_GIRL_SPRITE_WIDTH = 734;
const VIKING_GIRL_SPRITE_HEIGHT = 553;
const VIKING_GIRL_SPRITE_X_UPD = 30;
const VIKING_GIRL_SPRITE_Y_UPD = 70;
const VIKING_GIRL_SPRITE_MULTIPLIER = 0.1;

const VIKING_BOY_SPRITE_WIDTH = 703;
const VIKING_BOY_SPRITE_HEIGHT = 547;
const VIKING_BOY_SPRITE_X_UPD = 30;
const VIKING_BOY_SPRITE_Y_UPD = 70;
const VIKING_BOY_SPRITE_MULTIPLIER = 0.1;

const KNIGHT_SPRITE_X_UPD = 30;
const KNIGHT_SPRITE_Y_UPD = 70;
const KNIGHT_SPRITE_MULTIPLIER = 0.1;

const MENU_IMG_SIZE_WIDTH_MULTIPLIER = 0.3;
const MENU_IMG_SIZE_HEIGHT_MULTIPLIER = 0.3;

function countLoadedImagesAndLaunchIfReady(){
    picsToLoad--;
    // console.log("picsToLoad", picsToLoad);
    if (picsToLoad == 0){
        startMenuScreen();
    }
}

function beginLoadingImage(imgVar, fileName){
    imgVar.onload = countLoadedImagesAndLaunchIfReady;
    imgVar.src = "static/" + fileName;
}

function beginLoadingSpritePlayer(imgObject){
    numberOfPlayersSprites ++;
    let playerImagesObject = {
        type: imgObject.type,
        title: imgObject.title,
        theFiles: []
    };

    let files = imgObject.theFiles;
    var playerImage;
    theFiles = [];
    for (var img = 0; img < files.length; img++){
        playerImage = {
            img: new Image(),
            type: files[img].type,
            frames: files[img].frames,
            framesX: files[img].framesX,
            framesY: files[img].framesY,
            spriteWidth: files[img].spriteWidth,
            spriteHeight: files[img].spriteHeight,
            spriteXupd: files[img].spriteXupd,
            spriteYupd: files[img].spriteYupd,
            spriteMultiplierX: files[img].spriteMultiplierX,
            spriteMultiplierY: files[img].spriteMultiplierY
        };
        beginLoadingImage(playerImage.img, files[img].theFile);
        let img_num = theFiles.length;
        theFiles[img_num] = playerImage;
    }
    playerImagesObject.theFiles = theFiles.slice();

    let player_num = playersImgArray.length;
    playersImgArray[player_num] = playerImagesObject; // append

}
// TODO: combine beginLoadingMenuImg and beginLoadingSpritePlayer
function beginLoadingMenuImg(imgObject){
    menuImgObject = {
        type: imgObject.type,
        theFiles: []
    };

    var menuImage;
    theFiles = [];

    for (var img = 0; img < imgObject.theFiles.length; img++){
        menuImage = {
            img: new Image(),
            type: imgObject.theFiles[img].type
        };
        beginLoadingImage(menuImage.img, imgObject.theFiles[img].theFile);
        theFiles[theFiles.length] = menuImage;
    }
    menuImgObject.theFiles = theFiles.slice();
}

function beginLoadingArrowsImg(imgObject){
    interfaceArrowsObject = {
        type: imgObject.type,
        theFiles: []
    };

    var menuImage;
    theFiles = [];

    for (var img = 0; img < imgObject.theFiles.length; img++){
        menuImage = {
            img: new Image(),
            type: imgObject.theFiles[img].type
        };
        beginLoadingImage(menuImage.img, imgObject.theFiles[img].theFile);
        theFiles[theFiles.length] = menuImage;
    }
    interfaceArrowsObject.theFiles = theFiles.slice();

}

function loadImages(){
    let imageList = [
        {type: TYPE_BACKGROUND_IMG, varName: backgroundImg, theFile:"images/parn.jpg"},
        {
            type: SPRITE_PLAYER,
            title: 'Blond Viking Girl',
            theFiles:[
                {
                    type: PLAYER_IMG_IDLE_LEFT,
                    theFile: PLAYER_IMG_PATH + "./viking_girl_blond/__blonde_viking_girl_idle_facing_left.png",
                    frames: 20,
                    framesX: 4,
                    framesY: 5,
                    spriteWidth: VIKING_GIRL_SPRITE_WIDTH,
                    spriteHeight: VIKING_GIRL_SPRITE_HEIGHT,
                    spriteXupd: VIKING_GIRL_SPRITE_X_UPD,
                    spriteYupd: VIKING_GIRL_SPRITE_Y_UPD,
                    spriteMultiplierX: VIKING_GIRL_SPRITE_MULTIPLIER,
                    spriteMultiplierY: VIKING_GIRL_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_IDLE_RIGHT,
                    theFile: PLAYER_IMG_PATH + "./viking_girl_blond/__blonde_viking_girl_idle_facing_right.png",
                    frames: 20,
                    framesX: 4,
                    framesY: 5,
                    spriteWidth: VIKING_GIRL_SPRITE_WIDTH,
                    spriteHeight: VIKING_GIRL_SPRITE_HEIGHT,
                    spriteXupd: VIKING_GIRL_SPRITE_X_UPD,
                    spriteYupd: VIKING_GIRL_SPRITE_Y_UPD,
                    spriteMultiplierX: VIKING_GIRL_SPRITE_MULTIPLIER,
                    spriteMultiplierY: VIKING_GIRL_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_DIE_LEFT,
                    theFile: PLAYER_IMG_PATH + "./viking_girl_blond/__blonde_viking_girl_die_facing_left.png",
                    frames: 5,
                    framesX: 1,
                    framesY: 5,
                    spriteWidth: VIKING_GIRL_SPRITE_WIDTH,
                    spriteHeight: VIKING_GIRL_SPRITE_HEIGHT,
                    spriteXupd: VIKING_GIRL_SPRITE_X_UPD,
                    spriteYupd: VIKING_GIRL_SPRITE_Y_UPD,
                    spriteMultiplierX: VIKING_GIRL_SPRITE_MULTIPLIER,
                    spriteMultiplierY: VIKING_GIRL_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_DIE_RIGHT,
                    theFile: PLAYER_IMG_PATH + "./viking_girl_blond/__blonde_viking_girl_die_facing_right.png",
                    frames: 5,
                    framesX: 1,
                    framesY: 5,
                    spriteWidth: VIKING_GIRL_SPRITE_WIDTH,
                    spriteHeight: VIKING_GIRL_SPRITE_HEIGHT,
                    spriteXupd: VIKING_GIRL_SPRITE_X_UPD,
                    spriteYupd: VIKING_GIRL_SPRITE_Y_UPD,
                    spriteMultiplierX: VIKING_GIRL_SPRITE_MULTIPLIER,
                    spriteMultiplierY: VIKING_GIRL_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_WALK_LEFT,
                    theFile: PLAYER_IMG_PATH + "./viking_girl_blond/__blonde_viking_girl_walk_facing_left.png",
                    frames: 15,
                    framesX: 3,
                    framesY: 5,
                    spriteWidth: VIKING_GIRL_SPRITE_WIDTH,
                    spriteHeight: VIKING_GIRL_SPRITE_HEIGHT,
                    spriteXupd: VIKING_GIRL_SPRITE_X_UPD,
                    spriteYupd: VIKING_GIRL_SPRITE_Y_UPD,
                    spriteMultiplierX: VIKING_GIRL_SPRITE_MULTIPLIER,
                    spriteMultiplierY: VIKING_GIRL_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_WALK_RIGHT,
                    theFile: PLAYER_IMG_PATH + "./viking_girl_blond/__blonde_viking_girl_walk_facing_right.png",
                    frames: 15,
                    framesX: 3,
                    framesY: 5,
                    spriteWidth: VIKING_GIRL_SPRITE_WIDTH,
                    spriteHeight: VIKING_GIRL_SPRITE_HEIGHT,
                    spriteXupd: VIKING_GIRL_SPRITE_X_UPD,
                    spriteYupd: VIKING_GIRL_SPRITE_Y_UPD,
                    spriteMultiplierX: VIKING_GIRL_SPRITE_MULTIPLIER,
                    spriteMultiplierY: VIKING_GIRL_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_RUN_LEFT,
                    theFile: PLAYER_IMG_PATH + "./viking_girl_blond/__blonde_viking_girl_run_facing_left.png",
                    frames: 15,
                    framesX: 3,
                    framesY: 5,
                    spriteWidth: VIKING_GIRL_SPRITE_WIDTH,
                    spriteHeight: VIKING_GIRL_SPRITE_HEIGHT,
                    spriteXupd: VIKING_GIRL_SPRITE_X_UPD,
                    spriteYupd: VIKING_GIRL_SPRITE_Y_UPD,
                    spriteMultiplierX: VIKING_GIRL_SPRITE_MULTIPLIER,
                    spriteMultiplierY: VIKING_GIRL_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_RUN_RIGHT,
                    theFile: PLAYER_IMG_PATH + "./viking_girl_blond/__blonde_viking_girl_run_facing_right.png",
                    frames: 15,
                    framesX: 3,
                    framesY: 5,
                    spriteWidth: VIKING_GIRL_SPRITE_WIDTH,
                    spriteHeight: VIKING_GIRL_SPRITE_HEIGHT,
                    spriteXupd: VIKING_GIRL_SPRITE_X_UPD,
                    spriteYupd: VIKING_GIRL_SPRITE_Y_UPD,
                    spriteMultiplierX: VIKING_GIRL_SPRITE_MULTIPLIER,
                    spriteMultiplierY: VIKING_GIRL_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_JUMP_LEFT,
                    theFile: PLAYER_IMG_PATH + "./viking_girl_blond/__blonde_viking_girl_jump_facing_left.png",
                    frames: 10,
                    framesX: 2,
                    framesY: 5,
                    spriteWidth: VIKING_GIRL_SPRITE_WIDTH,
                    spriteHeight: VIKING_GIRL_SPRITE_HEIGHT,
                    spriteXupd: VIKING_GIRL_SPRITE_X_UPD,
                    spriteYupd: VIKING_GIRL_SPRITE_Y_UPD,
                    spriteMultiplierX: VIKING_GIRL_SPRITE_MULTIPLIER,
                    spriteMultiplierY: VIKING_GIRL_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_JUMP_RIGHT,
                    theFile: PLAYER_IMG_PATH + "./viking_girl_blond/__blonde_viking_girl_jump_facing_right.png",
                    frames: 10,
                    framesX: 2,
                    framesY: 5,
                    spriteWidth: VIKING_GIRL_SPRITE_WIDTH,
                    spriteHeight: VIKING_GIRL_SPRITE_HEIGHT,
                    spriteXupd: VIKING_GIRL_SPRITE_X_UPD,
                    spriteYupd: VIKING_GIRL_SPRITE_Y_UPD,
                    spriteMultiplierX: VIKING_GIRL_SPRITE_MULTIPLIER,
                    spriteMultiplierY: VIKING_GIRL_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_DEFEND_LEFT,
                    theFile: PLAYER_IMG_PATH + "./viking_girl_blond/__blonde_viking_girl_defend_facing_left.png",
                    frames: 5,
                    framesX: 1,
                    framesY: 5,
                    spriteWidth: VIKING_GIRL_SPRITE_WIDTH,
                    spriteHeight: VIKING_GIRL_SPRITE_HEIGHT,
                    spriteXupd: VIKING_GIRL_SPRITE_X_UPD,
                    spriteYupd: VIKING_GIRL_SPRITE_Y_UPD,
                    spriteMultiplierX: VIKING_GIRL_SPRITE_MULTIPLIER,
                    spriteMultiplierY: VIKING_GIRL_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_DEFEND_RIGHT,
                    theFile: PLAYER_IMG_PATH + "./viking_girl_blond/__blonde_viking_girl_defend_facing_right.png",
                    frames: 5,
                    framesX: 1,
                    framesY: 5,
                    spriteWidth: VIKING_GIRL_SPRITE_WIDTH,
                    spriteHeight: VIKING_GIRL_SPRITE_HEIGHT,
                    spriteXupd: VIKING_GIRL_SPRITE_X_UPD,
                    spriteYupd: VIKING_GIRL_SPRITE_Y_UPD,
                    spriteMultiplierX: VIKING_GIRL_SPRITE_MULTIPLIER,
                    spriteMultiplierY: VIKING_GIRL_SPRITE_MULTIPLIER
                },
                // {
                //     type: PLAYER_IMG_DEFEND1_LEFT,
                //     theFile: "sprites/players./viking_girl_blond/.png",
                // },
                // {
                //     type: PLAYER_IMG_DEFENT1_RIGHT,
                //     theFile: "sprites/players./viking_girl_blond/.png",
                // },
                {
                    type: PLAYER_IMG_ATTACK_LEFT,
                    theFile: PLAYER_IMG_PATH + "./viking_girl_blond/__blonde_viking_girl_attack_1_facing_left.png",
                    frames: 10,
                    framesX: 2,
                    framesY: 5,
                    spriteWidth: VIKING_GIRL_SPRITE_WIDTH,
                    spriteHeight: VIKING_GIRL_SPRITE_HEIGHT,
                    spriteXupd: VIKING_GIRL_SPRITE_X_UPD,
                    spriteYupd: VIKING_GIRL_SPRITE_Y_UPD,
                    spriteMultiplierX: VIKING_GIRL_SPRITE_MULTIPLIER,
                    spriteMultiplierY: VIKING_GIRL_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_ATTACK_RIGHT,
                    theFile: PLAYER_IMG_PATH + "./viking_girl_blond/__blonde_viking_girl_attack_1_facing_right.png",
                    frames: 10,
                    framesX: 2,
                    framesY: 5,
                    spriteWidth: VIKING_GIRL_SPRITE_WIDTH,
                    spriteHeight: VIKING_GIRL_SPRITE_HEIGHT,
                    spriteXupd: VIKING_GIRL_SPRITE_X_UPD,
                    spriteYupd: VIKING_GIRL_SPRITE_Y_UPD,
                    spriteMultiplierX: VIKING_GIRL_SPRITE_MULTIPLIER,
                    spriteMultiplierY: VIKING_GIRL_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_ATTACK1_LEFT,
                    theFile: PLAYER_IMG_PATH + "./viking_girl_blond/__blonde_viking_girl_attack_1_facing_left.png",
                    frames: 10,
                    framesX: 2,
                    framesY: 5,
                    spriteWidth: VIKING_GIRL_SPRITE_WIDTH,
                    spriteHeight: VIKING_GIRL_SPRITE_HEIGHT,
                    spriteXupd: VIKING_GIRL_SPRITE_X_UPD,
                    spriteYupd: VIKING_GIRL_SPRITE_Y_UPD,
                    spriteMultiplierX: VIKING_GIRL_SPRITE_MULTIPLIER,
                    spriteMultiplierY: VIKING_GIRL_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_ATTACK1_RIGHT,
                    theFile: PLAYER_IMG_PATH + "./viking_girl_blond/__blonde_viking_girl_attack_1_facing_right.png",
                    frames: 10,
                    framesX: 2,
                    framesY: 5,
                    spriteWidth: VIKING_GIRL_SPRITE_WIDTH,
                    spriteHeight: VIKING_GIRL_SPRITE_HEIGHT,
                    spriteXupd: VIKING_GIRL_SPRITE_X_UPD,
                    spriteYupd: VIKING_GIRL_SPRITE_Y_UPD,
                    spriteMultiplierX: VIKING_GIRL_SPRITE_MULTIPLIER,
                    spriteMultiplierY: VIKING_GIRL_SPRITE_MULTIPLIER
                }
            ]
        },
        {
            type: SPRITE_PLAYER,
            title: 'Blond Viking Boy',
            theFiles:[
                {
                    type: PLAYER_IMG_IDLE_LEFT,
                    theFile: PLAYER_IMG_PATH + "./viking_boy_blond/__blonde_viking_boy_idle_facing_left.png",
                    frames: 20,
                    framesX: 4,
                    framesY: 5,
                    spriteWidth: VIKING_BOY_SPRITE_WIDTH,
                    spriteHeight: VIKING_BOY_SPRITE_HEIGHT,
                    spriteXupd: VIKING_BOY_SPRITE_X_UPD,
                    spriteYupd: VIKING_BOY_SPRITE_Y_UPD,
                    spriteMultiplierX: VIKING_BOY_SPRITE_MULTIPLIER,
                    spriteMultiplierY: VIKING_BOY_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_IDLE_RIGHT,
                    theFile: PLAYER_IMG_PATH + "./viking_boy_blond/__blonde_viking_boy_idle_facing_right.png",
                    frames: 20,
                    framesX: 4,
                    framesY: 5,
                    spriteWidth: VIKING_BOY_SPRITE_WIDTH,
                    spriteHeight: VIKING_BOY_SPRITE_HEIGHT,
                    spriteXupd: VIKING_BOY_SPRITE_X_UPD,
                    spriteYupd: VIKING_BOY_SPRITE_Y_UPD,
                    spriteMultiplierX: VIKING_BOY_SPRITE_MULTIPLIER,
                    spriteMultiplierY: VIKING_BOY_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_DIE_LEFT,
                    theFile: PLAYER_IMG_PATH + "./viking_boy_blond/__blonde_viking_boy_die_facing_left.png",
                    frames: 5,
                    framesX: 1,
                    framesY: 5,
                    spriteWidth: VIKING_BOY_SPRITE_WIDTH,
                    spriteHeight: VIKING_BOY_SPRITE_HEIGHT,
                    spriteXupd: VIKING_BOY_SPRITE_X_UPD,
                    spriteYupd: VIKING_BOY_SPRITE_Y_UPD,
                    spriteMultiplierX: VIKING_BOY_SPRITE_MULTIPLIER,
                    spriteMultiplierY: VIKING_BOY_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_DIE_RIGHT,
                    theFile: PLAYER_IMG_PATH + "./viking_boy_blond/__blonde_viking_boy_die_facing_right.png",
                    frames: 5,
                    framesX: 1,
                    framesY: 5,
                    spriteWidth: VIKING_BOY_SPRITE_WIDTH,
                    spriteHeight: VIKING_BOY_SPRITE_HEIGHT,
                    spriteXupd: VIKING_BOY_SPRITE_X_UPD,
                    spriteYupd: VIKING_BOY_SPRITE_Y_UPD,
                    spriteMultiplierX: VIKING_BOY_SPRITE_MULTIPLIER,
                    spriteMultiplierY: VIKING_BOY_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_WALK_LEFT,
                    theFile: PLAYER_IMG_PATH + "./viking_boy_blond/__blonde_viking_boy_walk_facing_left.png",
                    frames: 15,
                    framesX: 3,
                    framesY: 5,
                    spriteWidth: VIKING_BOY_SPRITE_WIDTH,
                    spriteHeight: VIKING_BOY_SPRITE_HEIGHT,
                    spriteXupd: VIKING_BOY_SPRITE_X_UPD,
                    spriteYupd: VIKING_BOY_SPRITE_Y_UPD,
                    spriteMultiplierX: VIKING_BOY_SPRITE_MULTIPLIER,
                    spriteMultiplierY: VIKING_BOY_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_WALK_RIGHT,
                    theFile: PLAYER_IMG_PATH + "./viking_boy_blond/__blonde_viking_boy_walk_facing_right.png",
                    frames: 15,
                    framesX: 3,
                    framesY: 5,
                    spriteWidth: VIKING_BOY_SPRITE_WIDTH,
                    spriteHeight: VIKING_BOY_SPRITE_HEIGHT,
                    spriteXupd: VIKING_BOY_SPRITE_X_UPD,
                    spriteYupd: VIKING_BOY_SPRITE_Y_UPD,
                    spriteMultiplierX: VIKING_BOY_SPRITE_MULTIPLIER,
                    spriteMultiplierY: VIKING_BOY_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_RUN_LEFT,
                    theFile: PLAYER_IMG_PATH + "./viking_boy_blond/__blonde_viking_boy_run_facing_left.png",
                    frames: 15,
                    framesX: 3,
                    framesY: 5,
                    spriteWidth: VIKING_BOY_SPRITE_WIDTH,
                    spriteHeight: VIKING_BOY_SPRITE_HEIGHT,
                    spriteXupd: VIKING_BOY_SPRITE_X_UPD,
                    spriteYupd: VIKING_BOY_SPRITE_Y_UPD,
                    spriteMultiplierX: VIKING_BOY_SPRITE_MULTIPLIER,
                    spriteMultiplierY: VIKING_BOY_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_RUN_RIGHT,
                    theFile: PLAYER_IMG_PATH + "./viking_boy_blond/__blonde_viking_boy_run_facing_right.png",
                    frames: 15,
                    framesX: 3,
                    framesY: 5,
                    spriteWidth: VIKING_BOY_SPRITE_WIDTH,
                    spriteHeight: VIKING_BOY_SPRITE_HEIGHT,
                    spriteXupd: VIKING_BOY_SPRITE_X_UPD,
                    spriteYupd: VIKING_BOY_SPRITE_Y_UPD,
                    spriteMultiplierX: VIKING_BOY_SPRITE_MULTIPLIER,
                    spriteMultiplierY: VIKING_BOY_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_JUMP_LEFT,
                    theFile: PLAYER_IMG_PATH + "./viking_boy_blond/__blonde_viking_boy_jump_facing_left.png",
                    frames: 10,
                    framesX: 2,
                    framesY: 5,
                    spriteWidth: VIKING_BOY_SPRITE_WIDTH,
                    spriteHeight: VIKING_BOY_SPRITE_HEIGHT,
                    spriteXupd: VIKING_BOY_SPRITE_X_UPD,
                    spriteYupd: VIKING_BOY_SPRITE_Y_UPD,
                    spriteMultiplierX: VIKING_BOY_SPRITE_MULTIPLIER,
                    spriteMultiplierY: VIKING_BOY_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_JUMP_RIGHT,
                    theFile: PLAYER_IMG_PATH + "./viking_boy_blond/__blonde_viking_boy_jump_facing_right.png",
                    frames: 10,
                    framesX: 2,
                    framesY: 5,
                    spriteWidth: VIKING_BOY_SPRITE_WIDTH,
                    spriteHeight: VIKING_BOY_SPRITE_HEIGHT,
                    spriteXupd: VIKING_BOY_SPRITE_X_UPD,
                    spriteYupd: VIKING_BOY_SPRITE_Y_UPD,
                    spriteMultiplierX: VIKING_BOY_SPRITE_MULTIPLIER,
                    spriteMultiplierY: VIKING_BOY_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_DEFEND_LEFT,
                    theFile: PLAYER_IMG_PATH + "./viking_boy_blond/__blonde_viking_boy_defend_facing_left.png",
                    frames: 5,
                    framesX: 1,
                    framesY: 5,
                    spriteWidth: VIKING_BOY_SPRITE_WIDTH,
                    spriteHeight: VIKING_BOY_SPRITE_HEIGHT,
                    spriteXupd: VIKING_BOY_SPRITE_X_UPD,
                    spriteYupd: VIKING_BOY_SPRITE_Y_UPD,
                    spriteMultiplierX: VIKING_BOY_SPRITE_MULTIPLIER,
                    spriteMultiplierY: VIKING_BOY_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_DEFEND_RIGHT,
                    theFile: PLAYER_IMG_PATH + "./viking_boy_blond/__blonde_viking_boy_defend_facing_right.png",
                    frames: 5,
                    framesX: 1,
                    framesY: 5,
                    spriteWidth: VIKING_BOY_SPRITE_WIDTH,
                    spriteHeight: VIKING_BOY_SPRITE_HEIGHT,
                    spriteXupd: VIKING_BOY_SPRITE_X_UPD,
                    spriteYupd: VIKING_BOY_SPRITE_Y_UPD,
                    spriteMultiplierX: VIKING_BOY_SPRITE_MULTIPLIER,
                    spriteMultiplierY: VIKING_BOY_SPRITE_MULTIPLIER
                },
                // {
                //     type: PLAYER_IMG_DEFEND1_LEFT,
                //     theFile: "sprites/players./viking_boy_blond/.png",
                // },
                // {
                //     type: PLAYER_IMG_DEFENT1_RIGHT,
                //     theFile: "sprites/players./viking_boy_blond/.png",
                // },
                {
                    type: PLAYER_IMG_ATTACK_LEFT,
                    theFile: PLAYER_IMG_PATH + "./viking_boy_blond/__blonde_viking_boy_attack_1_facing_left.png",
                    frames: 10,
                    framesX: 2,
                    framesY: 5,
                    spriteWidth: VIKING_BOY_SPRITE_WIDTH,
                    spriteHeight: VIKING_BOY_SPRITE_HEIGHT,
                    spriteXupd: VIKING_BOY_SPRITE_X_UPD,
                    spriteYupd: VIKING_BOY_SPRITE_Y_UPD,
                    spriteMultiplierX: VIKING_BOY_SPRITE_MULTIPLIER,
                    spriteMultiplierY: VIKING_BOY_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_ATTACK_RIGHT,
                    theFile: PLAYER_IMG_PATH + "./viking_boy_blond/__blonde_viking_boy_attack_1_facing_right.png",
                    frames: 10,
                    framesX: 2,
                    framesY: 5,
                    spriteWidth: VIKING_BOY_SPRITE_WIDTH,
                    spriteHeight: VIKING_BOY_SPRITE_HEIGHT,
                    spriteXupd: VIKING_BOY_SPRITE_X_UPD,
                    spriteYupd: VIKING_BOY_SPRITE_Y_UPD,
                    spriteMultiplierX: VIKING_BOY_SPRITE_MULTIPLIER,
                    spriteMultiplierY: VIKING_BOY_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_ATTACK1_LEFT,
                    theFile: PLAYER_IMG_PATH + "./viking_boy_blond/__blonde_viking_boy_attack_2_facing_left.png",
                    frames: 10,
                    framesX: 2,
                    framesY: 5,
                    spriteWidth: VIKING_BOY_SPRITE_WIDTH,
                    spriteHeight: VIKING_BOY_SPRITE_HEIGHT,
                    spriteXupd: VIKING_BOY_SPRITE_X_UPD,
                    spriteYupd: VIKING_BOY_SPRITE_Y_UPD,
                    spriteMultiplierX: VIKING_BOY_SPRITE_MULTIPLIER,
                    spriteMultiplierY: VIKING_BOY_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_ATTACK1_RIGHT,
                    theFile: PLAYER_IMG_PATH + "./viking_boy_blond/__blonde_viking_boy_attack_2_facing_right.png",
                    frames: 10,
                    framesX: 2,
                    framesY: 5,
                    spriteWidth: VIKING_BOY_SPRITE_WIDTH,
                    spriteHeight: VIKING_BOY_SPRITE_HEIGHT,
                    spriteXupd: VIKING_BOY_SPRITE_X_UPD,
                    spriteYupd: VIKING_BOY_SPRITE_Y_UPD,
                    spriteMultiplierX: VIKING_BOY_SPRITE_MULTIPLIER,
                    spriteMultiplierY: VIKING_BOY_SPRITE_MULTIPLIER
                }
            ]
        },
        {
            type: SPRITE_PLAYER,
            title: 'Knight',
            theFiles:[
                {
                    type: PLAYER_IMG_IDLE_LEFT,
                    theFile: PLAYER_IMG_PATH + "./knight/knight_rest_left.png",
                    frames: 8,
                    framesX: 2,
                    framesY: 4,
                    spriteWidth: 521,
                    spriteHeight: 581,
                    spriteXupd: KNIGHT_SPRITE_X_UPD,
                    spriteYupd: KNIGHT_SPRITE_Y_UPD,
                    spriteMultiplierX: KNIGHT_SPRITE_MULTIPLIER,
                    spriteMultiplierY: KNIGHT_SPRITE_MULTIPLIER
                },

                {
                    type: PLAYER_IMG_IDLE_RIGHT,
                    theFile: PLAYER_IMG_PATH + "./knight/knight_rest_right.png",
                    frames: 8,
                    framesX: 2,
                    framesY: 4,
                    spriteWidth: 521,
                    spriteHeight: 581,
                    spriteXupd: KNIGHT_SPRITE_X_UPD,
                    spriteYupd: KNIGHT_SPRITE_Y_UPD,
                    spriteMultiplierX: KNIGHT_SPRITE_MULTIPLIER,
                    spriteMultiplierY: KNIGHT_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_DIE_LEFT,
                    theFile: PLAYER_IMG_PATH + "./knight/knight_die_left.png",
                    frames: 16,
                    framesX: 4,
                    framesY: 4,
                    spriteWidth: 848,
                    spriteHeight: 659,
                    spriteXupd: KNIGHT_SPRITE_X_UPD,
                    spriteYupd: KNIGHT_SPRITE_Y_UPD,
                    spriteMultiplierX: KNIGHT_SPRITE_MULTIPLIER,
                    spriteMultiplierY: KNIGHT_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_DIE_RIGHT,
                    theFile: PLAYER_IMG_PATH + "./knight/knight_die_right.png",
                    frames: 16,
                    framesX: 4,
                    framesY: 4,
                    spriteWidth: 848,
                    spriteHeight: 659,
                    spriteXupd: KNIGHT_SPRITE_X_UPD,
                    spriteYupd: KNIGHT_SPRITE_Y_UPD,
                    spriteMultiplierX: KNIGHT_SPRITE_MULTIPLIER,
                    spriteMultiplierY: KNIGHT_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_WALK_LEFT,
                    theFile: PLAYER_IMG_PATH + "./knight/knight_walk_left.png",
                    frames: 16,
                    framesX: 4,
                    framesY: 4,
                    spriteWidth: 607,
                    spriteHeight: 619,
                    spriteXupd: KNIGHT_SPRITE_X_UPD,
                    spriteYupd: KNIGHT_SPRITE_Y_UPD,
                    spriteMultiplierX: KNIGHT_SPRITE_MULTIPLIER,
                    spriteMultiplierY: KNIGHT_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_WALK_RIGHT,
                    theFile: PLAYER_IMG_PATH + "./knight/knight_walk_right.png",
                    frames: 16,
                    framesX: 4,
                    framesY: 4,
                    spriteWidth: 607,
                    spriteHeight: 619,
                    spriteXupd: KNIGHT_SPRITE_X_UPD,
                    spriteYupd: KNIGHT_SPRITE_Y_UPD,
                    spriteMultiplierX: KNIGHT_SPRITE_MULTIPLIER,
                    spriteMultiplierY: KNIGHT_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_RUN_LEFT,
                    theFile: PLAYER_IMG_PATH + "./knight/knight_run_left.png",
                    frames: 16,
                    framesX: 4,
                    framesY: 4,
                    spriteWidth: 689,
                    spriteHeight: 592,
                    spriteXupd: KNIGHT_SPRITE_X_UPD,
                    spriteYupd: KNIGHT_SPRITE_Y_UPD,
                    spriteMultiplierX: KNIGHT_SPRITE_MULTIPLIER,
                    spriteMultiplierY: KNIGHT_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_RUN_RIGHT,
                    theFile: PLAYER_IMG_PATH + "./knight/knight_run_right.png",
                    frames: 16,
                    framesX: 4,
                    framesY: 4,
                    spriteWidth: 689,
                    spriteHeight: 592,
                    spriteXupd: KNIGHT_SPRITE_X_UPD,
                    spriteYupd: KNIGHT_SPRITE_Y_UPD,
                    spriteMultiplierX: KNIGHT_SPRITE_MULTIPLIER,
                    spriteMultiplierY: KNIGHT_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_JUMP_LEFT,
                    theFile: PLAYER_IMG_PATH + "./knight/knight_jump_left.png",
                    frames: 16,
                    framesX: 4,
                    framesY: 4,
                    spriteWidth: 547,
                    spriteHeight: 703,
                    spriteXupd: KNIGHT_SPRITE_X_UPD,
                    spriteYupd: KNIGHT_SPRITE_Y_UPD,
                    spriteMultiplierX: KNIGHT_SPRITE_MULTIPLIER,
                    spriteMultiplierY: KNIGHT_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_JUMP_RIGHT,
                    theFile: PLAYER_IMG_PATH + "./knight/knight_jump_right.png",
                    frames: 16,
                    framesX: 4,
                    framesY: 4,
                    spriteWidth: 547,
                    spriteHeight: 703,
                    spriteXupd: KNIGHT_SPRITE_X_UPD,
                    spriteYupd: KNIGHT_SPRITE_Y_UPD,
                    spriteMultiplierX: KNIGHT_SPRITE_MULTIPLIER,
                    spriteMultiplierY: KNIGHT_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_DEFEND_LEFT,
                    theFile: PLAYER_IMG_PATH + "./knight/knight_slash_left.png",
                    frames: 12,
                    framesX: 3,
                    framesY: 4,
                    spriteWidth: 716,
                    spriteHeight: 697,
                    spriteXupd: KNIGHT_SPRITE_X_UPD,
                    spriteYupd: KNIGHT_SPRITE_Y_UPD,
                    spriteMultiplierX: KNIGHT_SPRITE_MULTIPLIER,
                    spriteMultiplierY: KNIGHT_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_DEFEND_RIGHT,
                    theFile: PLAYER_IMG_PATH + "./knight/knight_slash_right.png",
                    frames: 12,
                    framesX: 3,
                    framesY: 4,
                    spriteWidth: 716,
                    spriteHeight: 697,
                    spriteXupd: KNIGHT_SPRITE_X_UPD,
                    spriteYupd: KNIGHT_SPRITE_Y_UPD,
                    spriteMultiplierX: KNIGHT_SPRITE_MULTIPLIER,
                    spriteMultiplierY: KNIGHT_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_ATTACK_LEFT,
                    theFile: PLAYER_IMG_PATH + "./knight/knight_slash_left.png",
                    frames: 12,
                    framesX: 3,
                    framesY: 4,
                    spriteWidth: 716,
                    spriteHeight: 697,
                    spriteXupd: KNIGHT_SPRITE_X_UPD,
                    spriteYupd: KNIGHT_SPRITE_Y_UPD,
                    spriteMultiplierX: KNIGHT_SPRITE_MULTIPLIER,
                    spriteMultiplierY: KNIGHT_SPRITE_MULTIPLIER
                },
                {
                    type: PLAYER_IMG_ATTACK_RIGHT,
                    theFile: PLAYER_IMG_PATH + "./knight/knight_slash_right.png",
                    frames: 12,
                    framesX: 3,
                    framesY: 4,
                    spriteWidth: 716,
                    spriteHeight: 697,
                    spriteXupd: KNIGHT_SPRITE_X_UPD,
                    spriteYupd: KNIGHT_SPRITE_Y_UPD,
                    spriteMultiplierX: KNIGHT_SPRITE_MULTIPLIER,
                    spriteMultiplierY: KNIGHT_SPRITE_MULTIPLIER
                }
            ]
        },
        {
            type: MENU_IMG,
            title: 'Menu',
            theFiles:[
                {
                    type: FULL_SCREEN_PANNEL_1000_700,
                    theFile: INTEFACE_IMG_PATH + "/full_screen_panels/panel_1000_x_700.png"
                },
                {
                    type: INNER_PANEL_COLOR,
                    theFile: INTEFACE_IMG_PATH + "/inner_panel_color.png"
                },
                {
                    type: TITLE_PURPLE_LEFT,
                    theFile: INTEFACE_IMG_PATH + "/panel_title/purple_left.png"
                },
                {
                    type: TITLE_PURPLE_RIGHT,
                    theFile: INTEFACE_IMG_PATH + "/panel_title/purple_right.png"
                },
                {
                    type: TITLE_PURPLE_CENTER_REPEATING,
                    theFile: INTEFACE_IMG_PATH + "/panel_title/purple_center_repeating.png"
                },
                {
                    type: MENU_GREEN_LONG_BUTTON_LEFT,
                    theFile: INTEFACE_IMG_PATH + "/buttons/long_button_left_green.png"
                },
                {
                    type: MENU_GREEN_LONG_BUTTON_RIGHT,
                    theFile: INTEFACE_IMG_PATH + "/buttons/long_button_right_green.png"
                },
                {
                    type: MENU_GREEN_LONG_BUTTON_CENTER,
                    theFile: INTEFACE_IMG_PATH + "/buttons/long_button_center_green.png"
                },
            ]
        },
        {
            type: INTERFACE_ARROWS,
            title: 'Interface Arrows',
            theFiles:[
                {
                    type: ARROW_UP,
                    theFile: INTEFACE_IMG_PATH + "/arrows/up.png"
                },
                {
                    type: ARROW_RIGHT,
                    theFile: INTEFACE_IMG_PATH + "/arrows/right.png"
                },
                {
                    type: ARROW_DOWN,
                    theFile: INTEFACE_IMG_PATH + "/arrows/down.png"
                },
                {
                    type: ARROW_LEFT,
                    theFile: INTEFACE_IMG_PATH + "/arrows/left.png"
                },
            ]
        }
    ]

    picsToLoad = 0;
    for (var pics = 0; pics < imageList.length; pics++){
        if (imageList[pics].type == TYPE_BACKGROUND_IMG){
            picsToLoad++;
        } else if (imageList[pics].type == SPRITE_PLAYER){
            picsToLoad += imageList[pics].theFiles.length;
        } else if (imageList[pics].type == MENU_IMG){
            picsToLoad += imageList[pics].theFiles.length;
        } else if (imageList[pics].type == INTERFACE_ARROWS){
            picsToLoad += imageList[pics].theFiles.length;
        }

    }
    for (var i = 0; i < imageList.length; i++){
        switch (imageList[i].type){
            case TYPE_BACKGROUND_IMG:
                beginLoadingImage(
                    imageList[i].varName,
                    imageList[i].theFile
                );
                break;
            case SPRITE_PLAYER:
                beginLoadingSpritePlayer(imageList[i]);
                break;
            case MENU_IMG:
                beginLoadingMenuImg(imageList[i]);
                break;
            case INTERFACE_ARROWS:
                beginLoadingArrowsImg(imageList[i]);
                break;
        } // switch type
    } // for imageList
}
