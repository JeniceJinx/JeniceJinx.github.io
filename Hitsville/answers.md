 console.log(availableQuestions.length, questionCounter);
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
          //go to the next round
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('/roundtwo.html');
    };