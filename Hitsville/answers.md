This will be the "scratch sheet" for Mod-1 game working title "Hitsville USA"



API for music trivia lyrics

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3420852345msh2568d8fd07a2c8dp148eb3jsn31313ba6ee91',
		'X-RapidAPI-Host': 'genius.p.rapidapi.com'
	}
};

fetch('https://genius.p.rapidapi.com/artists/16775', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3420852345msh2568d8fd07a2c8dp148eb3jsn31313ba6ee91',
		'X-RapidAPI-Host': 'genius.p.rapidapi.com'
	}
};

fetch('https://genius.p.rapidapi.com/songs/442856', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));



  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3420852345msh2568d8fd07a2c8dp148eb3jsn31313ba6ee91',
		'X-RapidAPI-Host': 'genius.p.rapidapi.com'
	}
};

fetch('https://genius.p.rapidapi.com/artists/16775/songs', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3420852345msh2568d8fd07a2c8dp148eb3jsn31313ba6ee91',
		'X-RapidAPI-Host': 'genius.p.rapidapi.com'
	}
};

fetch('https://genius.p.rapidapi.com/search?q=Kendrick%20Lamar', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    
**********************************************************************************************************************************************************************************************************

Begining code for game background.  Need to convert to parallax so character can move


    const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 4473;
const CANVAS_HEIGHT = canvas.height = 895;
let gameSpeed = 5;


const background = new Image();
background.src = 'media/OpeningArch.png'

let x = 0;

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(background, x, 0);
    x--;
    requestAnimationFrame(animate);
}
animate();

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