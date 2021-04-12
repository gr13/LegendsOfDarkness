let playerStatusArray = [0, 1, 2, 3, 4, 5, 6, 7,  8];
const PLAYER_IDLE = 0;
const PLAYER_WALK = 1;
const PLAYER_RUN = 2;
const PLAYER_JUMP = 3;
const PLAYER_DEFEND = 4;
const PLAYER_DEFEND1 = 5;
const PLAYER_ATTACK = 6;
const PLAYER_ATTACK1 = 7;
const PLAYER_DIE = 8;
class Player {
    _playerImages;
    _x = 0;
    _y = 0;
    _location;
    _frame = 0;
    _frameX = 0;
    _frameY = 0;
    _status = PLAYER_IDLE;

    constructor(options){
        this._playerImages = options.playerImages;
    }

    getPlayerImages(){
        return this._playerImages;
    }

    setPlayerImages(img){
        this._playerImages = img.playerImages;
    }
}
