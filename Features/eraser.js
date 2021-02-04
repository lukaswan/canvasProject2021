class Eraser extends Painting{
    constructor(ctxdraft,ctxreal){
        super();
        this.contextdraft=ctxdraft;
        this.contextreal=ctxreal;
    }

    onMouseDown(coord,event){
       this.contextdraft.strokeStyle="white"
       this.contextdraft.lineWidth=thicknessspray;
       this.contextreal.shadowBlur=0;
        this.contextdraft.beginPath();
        this.contextdraft.moveTo(coord[0],coord[1]);
        
    }

   onDragging(coord,event){
        this.contextdraft.strokeStyle="white"
        this.contextdraft.lineTo(coord[0],coord[1])
        this.contextdraft.stroke();
        
   } 
    onMouseUp(coord){
        this.contextreal.stroke();
    }
} 

$('#erase-button').on('click',function(e){
    currentFunction = new Eraser(ctxdraft,ctxreal);
    $("p").css("display", "none");
    $("#eraser-inst").css("display","block");
 })