//Start game
const startGame = () => {
    const $audio = $('<audio>').attr('id','audio');
    $audio.attr('src','audio_alert.mp3');
    $audio.attr('autoplay','true');
    $audio.attr('loop','true');
    $('html').append($audio);
    let audio = document.getElementById("audio");
    audio.volume = 0.4;
    $('#createPlayer').show('slow');
    $('#player').hide();
    $('.endArrow').hide();
    $('#mark').hide();
    $('#game-board').hide();
    $('#button').on('click', () => {
      if($('#name').val().length === 0){
        alert('Name is required!')
      }else{
      //get username
      player.name = $('#name').val();
      localStorage.setItem('name', player.name);
      //Hide name-input and show player
      $('#createPlayer').hide();
      $('#game-board').show();
      setTimeout(()=>{
        $('#mark').show();
        $('#player').show('slow');
      }, 100);
      //Show opening text
      const $div = $('<div>').addClass('start').text('You awake in a field...');
      setTimeout(() => {
            $('body').prepend($div);
      }, 1500);
      setTimeout(() => {
        $div.text('...with no memory of how you got there.');
      },3000);
      setTimeout(() => {
        $div.text('In the distance you see a forest and a mountain range...');
      },6500);
      setTimeout(() => {
        $div.text('...Where are you? And what happened?');
      },12500);
      setTimeout(() => {
        $div.text('You need to look around and see if you can find any clues...');
      },15500);
      setTimeout(() => {
        $div.hide('slow');
        $('#mark').hide('slow');
        displayInfo();
        displayClues();
      },20500);
      }
    });
  }
  
  //display the user info bar at top of screen
  const displayInfo = () => {
      const $infobar = $('<div>').addClass('info');
      const $name = $('<h3>');
      const $health = $('<p>');
      const $playbar = $('<div>').addClass('how-to');
      const $controls = $('<h3>');
      // const $attackbtn = $('<p>');
      const $defendbtn = $('<p>');
      $name.text(player.name);
      $health.text('Health: ' + player.health);
      $controls.text('How to play:');
      // $attackbtn.text('Press A: (Attack) cast fireball');
      $defendbtn.text('Use left and right arrow keys to move');
      $playbar.append($controls,$defendbtn)
      $infobar.append($name, $health);
      $('body').prepend($infobar, $playbar);
  }
  
  

  
  //move and attack with character
  const useCharacter = () => {
    $(document).keydown(function(event){
      let $player = $('#player');
      let $board = $('#game-board');
  
      //If her is in the main area of screen
      if(($player.css('left') > '0px') && ($player.css('left') !==  (($( window ).width()-100)+'px'))){
        //player1
        //left arrow
        if(event.which == "37"){
          if( $('.boss').position() === undefined){
            $player.css('transform', 'scaleX(1)');
            $player.animate({left: "-=8"}, 0);
            findBook();
          }else{
            $player.css('transform', 'scaleX(1)');
            $player.animate({left: "-=0"}, 0);
          }
        }
    }
        //right arrow
        if(event.which == "39") {
          if( $('.boss').position() === undefined){
            $player.css('transform', 'scaleX(-1)');
            $player.animate({left: "+=8"}, 0);
          }else{
            $player.css('transform', 'scaleX(-1)');
            $player.animate({left: "+=0"}, 0);
          }
        }
  
      //If player is on left side of screen
      if($player.css('left') <= '0px'){
        //player1
        if(event.which == "39") {
          $player.css('transform', 'scaleX(-1)');
          $player.animate({left: "+=8"}, 0);
        }
      }
      //if player is on right side of screen
      if($player.position().left >= ($(window).width()-40)){
        //player1
        if(skully8.health <= 0){
          $player.animate({left: "+=8"}, 0);
          alert('Level 1 part 1 completed! All your progress has been saved!');
          $('.endArrow').hide();
          $('.info').hide();
          $('#player').hide();
          $('html').css('background', 'url(images/loading.gif) no-repeat center center');
          $('html').css('background-color', 'rgb(25,31,38)');
          setTimeout(() => {
            window.location.reload(false);
          },3500);
        }else{
        //right arrow
          $player.css('transform', 'scaleX(-1)');
          $player.animate({left: "-=8"}, 0);
        }
      }
    });
  }

  
  $(() => {
    if(localStorage.getItem('level4-completed') === 'true'){
      startLevel5();
    }else if(localStorage.getItem('level3-completed') === 'true'){
      startLevel4();
      useCharacter();
    }else if(localStorage.getItem('level2-completed') === 'true'){
      startLevel3();
      useCharacter();
  
    }else if(localStorage.getItem('level1-completed') === 'true'){
      startLevel2();
      useCharacter();
    }else{
      startGame();
      useCharacter();
    }
  });
  
  







  <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Hitsville USA</title>
    <script src="app.js" charset="utf-8"></script>
    <link rel="stylesheet" href="css/style.css">
    <link href="https://fonts.googleapis.com/css?family=Krona+One" rel="stylesheet">
    <style>
        @keyframes spinning {
          from { transform: rotate(0deg) }
          to { transform: rotate(360deg) }
        }
        .spin {
          animation-name: spinning;
          animation-duration: 8s;
          animation-iteration-count: infinite;
          /* linear | ease | ease-in | ease-out | ease-in-out */
          animation-timing-function: linear;
        }
      </style>
      
      <img src="Screen Shot 2022-09-02 at 11.23.12 AM.png" class="spin"/>
    <audio></audio>
  </head>

  <body>
    <div id="createPlayer">
      <div id="intro">Welcome to Hitsville!</div>
      <h1>Create Your Character</h1>
      <input id="name" type="text" name="heroName" placeholder="Enter Name" required><br>
      <button id="button">Continue</button>
    </div>
    <div id="game-board">
      <div id="hero">
        <img id="mark" src="images/mark.png" alt="">
        <img class="heroImg" src="images/hero.png"/>
      </div>
      <img class="endArrow" src="images/arrow.gif"/>
      <div class="enemy"></div>
      <!-- <div id="hero2"><img src="images/hero2.png"/></div> -->
    </div>

  </body>

</html>

html{
    overflow:hidden;
    background: url(../images/background.png)
  }
  
  #hero{
    position: fixed;
    top: 533px;
    left: 49%;
    -moz-transform: scaleX(-1);
     -o-transform: scaleX(-1);
     -webkit-transform: scaleX(-1);
     transform: scaleX(-1);
  }
  #hero img{
    width: 27px;
    padding:10px;
  }
  #createPlayer{
    display: block;
    margin:5% auto;
  }
  #createPlayer button, input {
    display: block;
    margin:0 auto;
  }
  #createPlayer h1{
    font-weight: lighter;
    text-align: center;
  }
  #game-board{
    width:100%;
  }
  #intro{
    font-family: 'Krona One', sans-serif;
    text-align: center;
    font-size: 40px;
    font-weight: bold;
  }
  #name {
    padding:10px;
    width:250px;
  }
  #mark{
    position: absolute;
    width:60px!important;
    margin-top: -60px;
    margin-left:-20px;
  }
  #level3text{
    position: absolute;
    text-align: center;
    color:white;
    left: 25%;
    top:10%;
    font-weight: bold;
    font-size: 40px;
  }


  .start{
    text-align: center;
    margin-top: 115px;
    font-size: 40px;
  }

  .info{
    position: absolute;
    top:10px!important;
    border: 5px solid gray;
    -webkit-box-shadow: 3px 3px 5px 6px #ccc;
    -moz-box-shadow:3px 3px 5px 6px #ccc;
    box-shadow: 3px 3px 5px 6px #ccc;
    background-color: rgba(0,0,0,0.4);
    border-radius: 0.3em;
    padding-left: 30px;
    line-height: 5px;
    color:white;
    width:150px;
  }
  .info p {
  color:lightgreen;
  }
  .how-to{
    text-align: center;
    margin:100px auto;
  }
  .spellbook{
    position: absolute;
    width: 22px;
    margin-top:21px;
    left:500px;
  }
  .healthBar{
    position: absolute;
    font-size: 22px;
    color:red;
    font-weight: bold;
    margin-top: -20px;
  }
  .hit{
    position: absolute;
    z-index: 1;
    margin-top: -20px;
    width: 80px;
  }
  .herobook{
    width:33px!important;
  }
  .helper{
    display: inline-block
  }
  #question{
    width: 60px;
    margin-left: 195px;
  }
  .endArrow{
    position: absolute;
    left: 88%;
    width:150px;
  }
  .helper-container{
    position: absolute;
    z-index: -1;
    margin-top: 6%;
    width: 150px!important;
    left:50%;
  }
  .talking{
    margin-top: 2.3%!important;
  }
  @media(max-height: 900px){
    .helper-container{
      position: absolute;
      z-index: -1;
      margin-top: 1.1%;
      width: 150px!important;
      left:50%;
    }
    .talking{
      margin-top: -3.2%!important;
    }
  }
  .boss-container{
    position: absolute;
    width: 300px;
    left:49%;
    margin-top: -190px;
  }
  .boss{
    width: 140px;
    padding-top:20px;
  }
  .speechBubble{
    background-color: white;
    padding:20px;
    height:90px;
    text-align:center;
    border-radius:0.5em;
    width:200px;
  }
  .accept{
    display: block;
    margin: 0 auto;
    padding: 5px;
  }
  .altar{
    position: absolute;
    width:115px;
    margin-top: -120px;
  }
  
  .altarBubble {
    background-color: white;
    margin-top: -180px;
    position: absolute;
    padding:20px;
    height:90px;
    text-align:center;
    border-radius:0.5em;
    width:200px;
  }
  .speechBubble2{
    position: absolute;
    background-color: white;
    padding:20px;
    margin-top: 70px;
    left:32%;
    height:90px;
    text-align:center;
    border-radius:0.5em;
    width:200px;
  }
  .end{
    color:white;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    margin-top: -40px;
  }
  @media(max-height:910px){
    .altar{
      position: absolute;
      width:115px;
      margin-top: -135px;
    }
    .speechBubble2{
      position: absolute;
      background-color: white;
      padding:20px;
      left:32%;
      height:90px;
      margin-top: 0px;
      text-align:center;
      border-radius:0.5em;
      width:200px;
    }
    .level4{
      margin-top:42%!important;
  
    }
  }
  
  const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreTracker = document.getElementById('score-tracker');
const scoreUpElement = document.getElementById('score-up');


let randomQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
});

function startGame() {
  startButton.classList.add('hide');
  randomQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  scoreTracker.classList.remove('hide');
  setNextQuestion();
  scoreUpElement.textContent = 0;
};

function setNextQuestion() {
  resetState();
  showQuestion(randomQuestions[currentQuestionIndex]);
};

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button)
  })
};

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
};

/* Checks if selected button is part of the correct dataset */
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  
  processResults(correct);
  setStatusClass(document.body, correct);

  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })

  if (randomQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
  }
};

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
};

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
};


/* Game questions with 4 total choices */
let questions = [{
    question: 'What year did the Raiders win their last Super Bowl?',
    answers: [{
        text: '2002',
        correct: true
      },
      {
        text: '1993',
        correct: false
      },
      {
        text: '1983',
        correct: false
      },
      {
        text: '1972',
        correct: false
      },
    ]
  },
  {
    question: "What was Jack Tatum's nickname?",
    answers: [{
        text: 'Killer Croc',
        correct: false
      },
      {
        text: 'The Assassin',
        correct: true
      },
      {
        text: 'The Jackhammer',
        correct: false
      },
      {
        text: 'Killer Bee',
        correct: false
      },
    ]
  },
  {
    question: "Which 'Hall of Fame' Raider wore the number 00",
    answers: [{
        text: 'Charles Woodson',
        correct: false
      },
      {
        text: 'Kenny Stabler',
        correct: false
      },
      {
        text: 'Mike Haynes',
        correct: false
      },
      {
        text: 'Jim Otto',
        correct: true
      },

    ]
  },
  {
    question: 'Which Raider became a HollyWood star?',
    answers: [{
        text: 'Carl Weathers',
        correct: true
      },
      {
        text: 'Howie Long',
        correct: false
      },
      {
        text: 'Lyle Alzado',
        correct: false
      },
      {
        text: 'Bo Jackson',
        correct: false
      },
    ]
  },
  {
    question: 'Who is Al Davis?',
    answers: [{
        text: 'Current star Wie Receiver',
        correct: false
      },
      {
        text: 'Current Owner',
        correct: false
      },
      {
        text: "QB from the late 70's",
        correct: false
      },
      {
        text: 'Ex Owner',
        correct: true
      },
    ]
  },
];


function processResults(isCorrect) {
  if (!isCorrect) {
    return;
  }
  
  const scoreUp = parseInt(scoreUpElement.textContent, 10) || 0;

  scoreUpElement.textContent = scoreUp + 100;
}

   <!--A start game button and a next button when anwering questions-->
    <!-- <div class="controls" style="position: center;">
      <button id="start-btn" class="start-btn btn">Are you a hardcore Raiders fan?<br>Find Out!</button>
      <button id="next-btn" class="next-btn btn hide">Next</button>
    </div>
    <div id="score-tracker" class="score-grid hide">
      <h3>Score</h3>
      <div id="score-up">0</div>
    </div> -->
  <!-- </div> -->

  body.correct {
    --hue: var(--hue-correct);
  }
  
  /* When answer is incorrect this color will become visible upon the background selection to match wrong answer */
  
  body.wrong {
    --hue: var(--hue-wrong);
  }
 
  

  
  /* Container layout */
/*   
  .container {
    justify-items: center;
    width: 400px;
    max-width: 80%;
    background-color: #63768d;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0 0 10px 2px;
  } */
  
  
  /* top to bottom grid with 4 options to choose from when answering question */
  
  .btn-grid {
    display: grid;
    gap: 10px;
    margin: 20px 0;
  }
  
  .btn {
    --hue: var(--hue-neutral);
    background-color: hsl(var(--hue), 20%, 70%);
    border: 1px solid black;
    padding: 5px 10px;
  }
  
  .btn:hover {
    border-color: #b8f3ff;
  }
  
  
  /* if this button chose is 'correct' then this variable color will display */
  
  .btn.correct {
    --hue: var(--hue-correct);
    background-color: hsl(var(--hue), 100%, 80%);
  }
  
  
  /* if this button chose is 'incorrect' then this variable color will display */
  
  .btn.wrong {
    --hue: var(--hue-wrong);
    background-color: hsl(var(--hue), 100%, 80%);
  }
  
  
  /* dimensiosn for start and next button*/
  
  .start-btn,
  .next-btn {
    font-size: 1rem;
    font-weight: bold;
    padding: 10px 20px;
  }
  
  
  /* Layout for buttons*/
  
  
  
  
  /* grid layout for score system */
  
  .score-grid {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  
  /* hide selection when it is unnecessary to have visible*/
  
  .hide {
    display: none;
  }

  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <style>
    @keyframes spinning {
      from { transform: rotate(0deg) }
      to { transform: rotate(360deg) }
    }
    .spin {
      animation-name: spinning;
      animation-duration: 8s;
      animation-iteration-count: infinite;
      /* linear | ease | ease-in | ease-out | ease-in-out */
      animation-timing-function: linear;
    }
  </style>
  
  <img src="Screen Shot 2022-09-02 at 11.23.12 AM.png" class="spin"/>
  <title>music trivia</title>
</head>
<body>
    


    
  <script src="script.js"></script>
</body>

</html>

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('questions-container');
const questionElement = document.getElementById('questions');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
});


function startGame(){
    console.log('Started');
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    shuffledQuestions = questions.sort(() => Math.random() -.5);
    currentQuestionIndex = 0;
    setNextQuestion();
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
  }

  function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
  }

  function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
  }
  
  function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }

const questions =[
    {
     question:"When summer burns with heat, I always get the hots for you, Go skinny dippin in the ocean where we used to do, When autumn sheds the leaves, the trees are bare, When you're not here, it doesn't feel the same",
     answers: [
        { text: '4 Seasons of Lonliness', correct: true},
        { text: 'Motown Philly', correct: false},
        { text: 'Summer Heat', correct: false},
        { text: 'All I do is think of you', correct: false},
    
            ]
    },

    {
        question:"Tell one more to fix the last one ,But I'll never get back to the truth, Thinking to myself she'll never ,find out , That's what we do, that's how we do",
        answers: [
           { text: 'Im Sorry', correct: false},
           { text: 'Twenty', correct: false},
           { text: 'I shoulda Lied', correct: true},
           { text: 'One More Try', correct: false},
       
               ]
       },

       {
        question: 'Sentimental fool am I to hear a old love song and wanna cry, but the melody keeps haunting me reminding me how in love we used to be',
        answers: [
           { text: 'Tears of a clown', correct: false},
           { text: 'Summer Heat', correct: false},
           { text: 'Uhh Ahh', correct: false},
           { text: 'Its the Same Old Song', correct: true},
       
               ]
       },

       {
        question: "Pardon my elxpression, but the feeling I have is so strong, I guess you know this isn't easy to do, I keep trying and trying to give my love to you",
        answers: [
           { text: 'Sympin Aint Easy', correct: true},
           { text: 'Motown Philly', correct: false},
           { text: 'Iris', correct: false},
           { text: 'On Bended Knee', correct: false},
       
               ]
       },

       {
        question: "I know I make mistakes, I am what I am, I'm only a man. So don't take my joy away",
        answers: [
           
           { text: 'Motown Philly', correct: false},
           { text: 'Human II', correct: true},
           { text: 'Joy', correct: false},
           { text: 'Doin Just Fine', correct: false},
       
               ]
       },

];  

class Player {
  constructor(name){
    this.name = name;
    this.points = 0;
  }
}

const player1 = new Player;
const player2 = new Player;


html{
    background-image: url(Stage.png);
    background-size:auto;

  }
  
  *,*::before, *::after{
    box-sizing: border-box;
    font-family: 'Courier New', Courier, monospace;
  }

  
  body{
    padding: 0;
    margin: 0;
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }

  .container{
    width: 800px;
    max-width: 80%;
    background-color: white;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0 0 10px 5px;

  }

  .btn-grid{
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 10px;
    margin: 20px 0;
  }

  .btn{
    --hue: var(--hue-neutral);
    border: 1px solid black;
    background-color: skyblue;
    border-radius: 5px;
    padding: 5px 10px;
    color: black;
    outline: none;
  }

  .btn:hover{
    border-color: blue;
  }
  
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="style.css" rel="stylesheet">
    <script defer src="script.js"></script>
    <title>Document</title>
</head>
<body>
    <div class="container">
        <div id="questions-container" class="hide">
            <div id="questions">Questions</div>
            <div id="answer-buttons" class="btn-grid">
                <button class="btn">Answer1</button>
                <button class="btn">Answer2</button>
                <button class="btn">Answer3</button>
                <button class="btn">Answer4</button>
            </div>
        </div>
        <div class="controls">
            <button id="start-btn">Start</button>
            <button id="next-btn">Next</button>
        </div>
    </div>
</body>
</html>

https://opentdb.com/api.php?amount=40&type=multiple