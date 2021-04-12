class gameEngineClass{
    constructor(){

    }

    colorRect(options){
        //topLeftX, topLeftY, boxWidth, boxHeight, fillColor){
        canvasContext.fillStyle = options.fillColor;
        canvasContext.fillRect(
            options.topLeftX,
            options.topLeftY,
            options.boxWidth,
            options.boxHeight
        );
    }

    drawRectangle(options){
        //topLeftX, topLeftY, boxWidth, boxHeight){
        canvasContext.beginPath();
        canvasContext.rect(
            options.topLeftX,
            options.topLeftY,
            options.boxWidth,
            options.boxHeight
        );
        canvasContext.stroke();
    }

    colorCircle(options){
        //centerX,centerY, radius, fillColor){
        canvasContext.fillStyle = options.fillColor;
        canvasContext.beginPath();
        canvasContext.arc(
            options.centerX,
            options.centerY,
            10,
            0,
            Math.PI*2,
            true);
        canvasContext.fill();
    }

    colorText(options){
        canvasContext.fillStyle = options.fillColor;
        canvasContext.font = options.fontSize + "px " + options.fontStyle;
        canvasContext.fillText(
            options.displayedText,
            options.textX,
            options.textY
        );
    }

    drawImg(options){
        // img, x,y, width,height, canvasX,canvasY, canvasWidth, canvasHeight
        canvasContext.drawImage(
            options.img,
            options.x, // x image
            options.y, // y image
            options.width, // width image
            options.height, // height image
            options.canvasX, // x canvas
            options.canvasY, // y canvas
            options.canvasWidth, // width canvas
            options.canvasHeight // height canvas
        );
    }

    getTextMiddle(options){
        //displayedText, fontSize, fontStyle, fillColor){
        canvasContext.fillStyle = options.fillColor;
        canvasContext.font = options.fontSize + "px " + options.fontStyle;
        return (canvasContext.measureText(options.displayedText).width/2)
    }


    centeredText(options){
        let centerText = this.getTextMiddle(options);
        let optionsText = options;
        optionsText.textX = options.centerX - centerText;
        optionsText.textY = options.centerY;

        this.colorText(optionsText);
    }

}
