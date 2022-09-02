const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 700;

const playerImage1 = new Image();
playerImage1.src = 'media/ManWalking.png';
//width of entire file divided by nymber of columns
const imageWidth = 290;
const imageHeight = 480;
let frameX =0;
let frameY = 0;
let gameFrame = 0;
const staggerFrame = 9;

function animatePlayer(){
    ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrame) % 22;
    frameX = imageWidth * position;
    ctx.drawImage(playerImage1,frameX,frameY * imageHeight,imageWidth,imageHeight,0,0, imageWidth, imageHeight);
    
    gameFrame++;
    requestAnimationFrame(animatePlayer);
}
animatePlayer();

