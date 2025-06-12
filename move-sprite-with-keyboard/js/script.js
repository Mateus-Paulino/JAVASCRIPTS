var canvas = document.querySelector("canvas");
var drawningSurface = canvas.getContext("2d");


var spriteObject = {
    x:0,
    y:0,
    width:64,
    height:64
};

var moo = Object.create(spriteObject);
moo.x = 100;
moo.y = 100;
var image =  new Image();
image.addEventListener("load", loadHandler, false);
image.src = "./images/moo.png"
var Xspeed = 0;
var Yspeed = 0;
var moveLeft = false;
var moveRight = false;
var moveUp = false;
var moveDown= false;

window.addEventListener("keydown", function(e) {
    switch(e.key) {
        case "ArrowUp":
            moveUp = true;
            break;
        case "ArrowDown":
            moveDown = true;
            break;
        case "ArrowLeft":
            moveLeft = true;
            break;
        case "ArrowRight":
            moveRight = true;
            break;
    }
}, false);

window.addEventListener("keyup", function(e) {
    switch(e.key) {
        case "ArrowUp":
            moveUp = false;
            break;
        case "ArrowDown":
            moveDown = false;
            break;
        case "ArrowLeft":
            moveLeft = false;
            break;
        case "ArrowRight":
            moveRight = false;
            break;
    }
}, false);

function loadHandler() {
    update();
}

function update() {
    //create  the animation loop
    window.requestAnimationFrame(update, canvas);
    moo.x += Xspeed;
    moo.y += Yspeed;

    if (moveUp && !moveDown) {
        Yspeed = -5;
    }
    if (moveDown && !moveUp) {
        Yspeed = 5;
    }
    if (moveLeft && !moveRight) {
        Xspeed = -5;
    }
    if (moveRight && !moveLeft) {
        Xspeed = 5;
    }
    if (!moveUp && !moveDown) {
        Yspeed = 0;
    }
    if (!moveLeft && !moveRight) {
        Xspeed = 0;
    }
    if (moo.x < 0) {
        moo.x = 0;
    }
    if (moo.y < 0) {
        moo.y = 0;
    }
    if (moo.x + moo.width > canvas.width) {
        moo.x =  canvas.width - moo.width;
    }
    if (moo.y + moo.height > canvas.height) {
        moo.y = canvas.height - moo.height;
    }
    render();
}

function render() {
    drawningSurface.clearRect(0,0, canvas.width, canvas.height);

    drawningSurface.drawImage(image,Math.floor(moo.x), Math.floor(moo.y), moo.height,moo.width);
}