class DrawRectangle extends Painting{
    constructor(ctxdraft,ctxreal){
        super();
        this.contextdraft=ctxdraft;
        this.contextreal=ctxreal;
    }

    onMouseDown(coord,event){
        this.contextdraft.fillStyle="black";
        this.origX=coord[0];
        this.origY=coord[1];
    }

   onDragging(coord,event){
        this.contextdraft.fillStyle = "black";
        this.contextdraft.clearRect(0,0,canvasDraft.width,canvasDraft.height)
       this.contextdraft.fillRect(this.origX,this.origY,coord[0]-this.origX,coord[1]-this.origY);

   } 
   onMouseUp(coord){
       this.contextdraft.clearRect(0,0,this.contextdraft.width,this.contextdraft.height)
       this.contextreal.fillRect(this.origX,this.origY,coord[0]-this.origX,coord[1]-this.origY)
   }
} 