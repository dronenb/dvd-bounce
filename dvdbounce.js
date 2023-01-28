let filename = "DVD_logo.svg";
let scale = 0.3;    // Scale of the SVG file relative to the width
let x0 = 0;         // Initial x position
let y0 = 0;         // Initial y position
let velocity = 4;   // Speed
window.onload = function (){
    let canvas = document.getElementById('icanvas');
    let ctx = canvas.getContext("2d");
    let dvdImg = new Image();
    dvdImg.src = filename;
    let x = x0;
    let y = y0;
    let dx = velocity;
    let dy = velocity;
    function resize_canvas() {
        canvas.width = Math.max( window.innerWidth, document.body.clientWidth );
        canvas.height = Math.max( window.innerHeight, document.body.clientHeight );
    }
    resize_canvas();
    addEventListener("resize", resize_canvas);
    function animate (){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let aspect_ratio = dvdImg.width / dvdImg.height;
        let dWidth =  canvas.width * scale;
        let dHeight = canvas.width * scale / aspect_ratio;
        if (x >= canvas.width - dWidth){
            x = canvas.width - dWidth
            dx = -1 * Math.abs(dx);
        }
        else if (x <= 0){
            x = 0;
            dx = Math.abs(dx);
        }
        if (y >= canvas.height - dHeight){
            y = canvas.height - dHeight
            dy = -1 * Math.abs(dy);
        }
        else if (y <= 0){
            y = 0;
            dy = Math.abs(dy);
        }
        ctx.drawImage(dvdImg, x, y, dWidth, dHeight);
        x += dx;
        y += dy;
        requestAnimationFrame(animate);
    }
    dvdImg.onload = animate;
}