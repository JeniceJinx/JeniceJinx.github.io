# JeniceJinx.github.io

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
      
      <img src="HittsVille.png" class="spin"/>
    <link rel="stylesheet" href="style.css">
   <link rel="stylesheet" href="game.css">
    <title>HitsVilleUSA-Music Trivia</title>
</head>
<body>
   <div class="container">
    <div id="home" class="flex-center flex-column">
        <h1>Welcome to Hitsville USA!</h1>
        <a class="btn" href="/game.html">Play</a>
        <a class="btn" href="/highscores.html">High Scores</a>   
    </div>
   </div> 
    
    
    
   
    <script src="script.js"></script> 
</body>
</html>
