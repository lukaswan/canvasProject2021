const canvasDraft = document.getElementById('canvas-draft');
const canvasReal = document.getElementById('canvas-real');
let ctxReal = canvasReal.getContext("2d");
let ctxDraft = canvasDraft.getContext("2d");
let currentFunction
let dragging=false;

$('#canvas-draft').on("mousedown",function(e){
    let mouseX=e.offsetX;
    let mouseY=e.offsetY;
    console.log(mouseX)
    console.log(mouseY)
    currentFunction.onMouseDown([mouseX,mouseY],e)
    dragging=true;
})
$('#canvas-draft').on("mousemove",function(e){
    if(dragging){
        let mouseX=e.offsetX;
        let mouseY=e.offsetY;
        console.log(`x${mouseX}`)
        console.log(`y${mouseY}`)
        currentFunction.onDragging([mouseX,mouseY],e)
    } 
})

$('#canvas-draft').on("mouseup",function(e){
    let mouseX=e.offsetX;
    let mouseY=e.offsetY;
    currentFunction.onMouseUp([mouseX,mouseY],e)
    dragging=false;
})

class Painting {
    constructor(){}
    onMouseDown(){};
    onDragging(){};
    onMouseUp(){};
    onMouseLeave(){};
    

}