// List of global variables

var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");
var timerEl = document.getElementById("timer");
var shuffledQuestions, currentQuestionIndex;
var timeLeft = 60;

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
};

// var startTime starts the clock at 60 seconds and counts down.  Currently counting beyond 0, which needs to be fixed

var startTime = setInterval(function() {
  timerEl.textContent = timeLeft + " seconds remaining";
  timeLeft--;
 
  if (timeLeft === 0) {
    timerEl.textContent = "";
    clearInterval(startTime);
  }  

}, 1000);

// setNextQuestion brings up the next question and resets the "container."  In addition, the question order is random.

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
};

// showQuestion offfers functionality for showing a question and picking an answer.  Screen changse color depending on whether the answer is correct or not.

function showQuestion(question) {
questionElement.innerText = question.question;
    question.answers.forEach(answer => {
    var button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });  
};

// clears prior question and answers

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
};

// functionality to answer questions and restart the quiz

function selectAnswer(e) {
  var selectedButton = e.target;
  var correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
  nextButton.classList.remove('hide');
  } else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
  }
};

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
  // console.log(element.classList.add("correct"))
};


function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
};

// showResults is where the score will be calculated and then added to scores.html.  I removed most of the existing code because it was not working.  Approach discussed more in scores.html.

/* function showResults(questions) {
  var correctAnswers = questions.correct

  for (var i=0; i < questions.length; i++) {

  }
}; */



// addEventListeners are typically at bottom of .js page though some are enbedded in the functions

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion();
});


// Array for questions and answers

var questions = [
  {
    question: 'Who invented Javascript?',
    answers: [
      { text: 'Douglas Crockford', correct: false },
      { text: 'Sheryl Sandberg', correct: false },
      { text: 'Brendan Eich', correct: true },
      { text: 'David Stahl', correct: false }
    ]
  },

  {
    question: 'Which one of the these is a JavaScript package manager?',
    answers: [
      { text: 'Node.js', correct: false },
      { text: 'TypeScript', correct: false },
      { text: 'npm', correct: true },
      { text: 'HTML for dummies', correct: false }
    ]
  },

  {
    question: 'Which tool can you use to ensure code quality',
    answers: [
      { text: 'Angular', correct: false },
      { text: 'JQuery', correct: false },
      { text: 'RequireJS', correct: false },
      { text: 'ESLint', correct: true }
    ]
  },

  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      { text: '<js>', correct: false },
      { text: '<script>', correct: true },
      { text: '<scripting>', correct: false },
      { text: '<javascript>', correct: false }
    ]
  },

  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: [
      { text: 'The <head> section', correct: false },
      { text: 'Both the <head> section and the <body> section are correct', correct: true },
      { text: 'The <body> section', correct: false },
      { text: 'Anywhere is fine', correct: false }
    ]
  },

  {
    question: 'How do you write "Hello World" in an alert box?',
    answers: [
      { text: 'alert("Hello World")', correct: true },
      { text: 'msg("Hello World")', correct: false },
      { text: 'alertBox("Hello World")', correct: false },
      { text: 'msgBox("Hello World")', correct: false }
    ]
  },

  {
    question: 'How do you create a function in JavaScript?',
    answers: [
      { text: 'function:myFunction()', correct: false },
      { text: 'function myFunction()', correct: true },
      { text: 'function = myFunction()', correct: false },
      { text: 'all of the above will work', correct: false }
    ]
  },

  {
    question: 'How do you call a function named "myFunction',
    answers: [
      { text: 'call myFunction()', correct: false },
      { text: 'call function myFunction()', correct: false },
      { text: 'myFunction()', correct: true },
      { text: 'all of the above will work', correct: false }
    ]
  },

  {
    question: 'How does a FOR loop start?',
    answers: [
      { text: 'for i = 1 to 5', correct: false },
      { text: 'for (i = 0; i <= 5)', correct: false },
      { text: 'for (i = 0; i <= 5; i++)', correct: true },
      { text: 'for (i <= 5; i++)', correct: false }
    ]
  },

  {
    question: 'How can you add a comment in a JavaScript?',
    answers: [
      { text: '*This is a comment', correct: false },
      { text: '<!--This is a comment-->', correct: false },
      { text: 'This is comment', correct: false },
      { text: '//This is a comment', correct: true }
    ]
  },

  {
    question: 'How do you find the number with the highest value of x and y?',
    answers: [
      { text: 'Math.max(x,y)', correct: true },
      { text: 'Math.ceil(x,y)', correct: false },
      { text: 'top(x,y)', correct: false },
      { text: 'ceil(x,y)', correct: false }
    ]
  },

  {
    question: 'How do you declare a JavaScript variable?',
    answers: [
      { text: 'var carName;', correct: true },
      { text: 'v carName;', correct: false },
      { text: 'variable carName;', correct: false },
      { text: 'all of the above will work', correct: false }
    ]
  },

  {
    question: 'Which operator is used to assign a value to a variable?',
    answers: [
      { text: ' x ', correct: false },
      { text: ' * ', correct: false },
      { text: ' - ', correct: false },
      { text: ' = ', correct: true }
    ]
  },

];
