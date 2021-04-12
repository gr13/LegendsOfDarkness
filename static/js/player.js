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
    #playerImages;
    #x = 0;
    #y = 0;
    #location;
    #frame = 0;
    #frameX = 0;
    #frameY = 0;
    #status = PLAYER_IDLE;

    constructor(options){
        this.#playerImages = options.playerImages;
    }

    getPlayerImages(){
        return this.#playerImages;
    }

    setPlayerImages(img){
        this.#playerImages = img.playerImages;
    }
}
