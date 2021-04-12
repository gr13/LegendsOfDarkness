let mousePosition = {x:0, y:0};
class inputClass{
    constructor(){
        // canvas.addEventListener('mousemove', this.updateMousePos);
    }
    setupInput(){
        canvas.addEventListener('click', this.onClick, false);
        console.log("mousePosition", mousePosition);
    }

    onClick(evt){
        let rect = canvas.getBoundingClientRect();
        let root = document.documentElement;
        mousePosition.x = evt.clientX - rect.left; // - root.scrollLeft;
        mousePosition.y = evt.clientY - rect.top; // - root.scrollTop;
        console.log("mousePosition", mousePosition);
        mouseClick();
    }
}
