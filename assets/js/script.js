// List of global variables

var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')

var shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
    var button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })  
  console.log(question)
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  var selectedButton = e.target
  var correct = selectedButton.dataset.correct
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

// Array for questions and answers

var questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false },
      { text: '55', correct: false },
      { text: '33', correct: false }
    ]
  },

  {
    question: 'What is 4 + 4?',
    answers: [
      { text: '8', correct: true },
      { text: '22', correct: false },
      { text: '55', correct: false },
      { text: '33', correct: false }
    ]
  },

  {
    question: 'What is 6 + 6?',
    answers: [
      { text: '12', correct: true },
      { text: '22', correct: false },
      { text: '55', correct: false },
      { text: '33', correct: false }
    ]
  },

  {
    question: "What is 8 + 8?",
    answers: [
      { text: '16', correct: true },
      { text: '22', correct: false },
      { text: '55', correct: false },
      { text: '33', correct: false }
    ]
  }
  



]
  




// Array of questions for quiz
/*
var myQestions =[
  {
    question: "Who invented Javascript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich",
      d: "David Stahl"
    },
    correctAnswer: "c"
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm",
      d: "David Stahl"
    },
    correctAnswers: "c"
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "JQuery",
      c: "RequireJS",
      d: "ESLint"
    },
    correctAnswer: "d"
  }
];

console.log("hello");
/*
var quizContainer = document.getElementById("#quiz");

var resultsContainer = document.getElementbyId("#results");

var submitButton = document.getElementId("#results");





// Build out the structure of the quiz
// disply quiz when page is opened

var buildQuiz = function() {}

function buildQuiz() {
  var output = [];

  myQestions.forEach(currentQuestion, questionNumber) {
    var answers [];

    for (letter in crrentQuestion.answers) {
      answers.push()
    }
  }
}

// show results once submitted

var showResults = function() {}


buttonId.addEventListener("click", showResults); */