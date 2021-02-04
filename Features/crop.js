class Crop extends Painting {
    constructor(ctxReal, ctxDraft) {
        super();
        this.ctxDraft = ctxDraft;
        this.ctxReal = ctxReal;
        this.ctxDraft.linewidth = 7;
    }

    onMouseDown(coord, event) {
        this.orig = coord;
        this.image = canvasReal.toDataURL("image/png");
    }

    onDragging(coord, event) {
        this.ctxDraft.strokeStyle = "red"
        this.ctxDraft.linewidth = 7;

        this.width = coord[0] - this.orig[0];
        this.height = coord[1] - this.orig[1];

        this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.ctxDraft.strokeRect(this.orig[0], this.orig[1], this.width, this.height);
    }

    onMouseUp(coord) {
        this.width = coord[0] - this.orig[0];
        this.height = coord[1] - this.orig[1];

        this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.ctxDraft.strokeRect(this.orig[0], this.orig[1], this.width, this.height);

        let crop_canvas = document.createElement('canvas');
        crop_canvas.width = this.width;
        crop_canvas.height = this.height;

        crop_canvas.getContext('2d').drawImage(canvasReal, this.orig[0], this.orig[1], this.width, this.height, 0, 0, crop_canvas.width, crop_canvas.height);
        window.open(crop_canvas.toDataURL("image/png"));

        this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    }
}

$('#crop-button').on('click',function(e){
    currentFunction = new Crop(ctxreal,ctxdraft);
 })