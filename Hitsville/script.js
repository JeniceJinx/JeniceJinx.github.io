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
