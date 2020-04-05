const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('questions')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
  console.log('started')
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()

}

function setNextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innertext = question.question
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

function selectAnswer() {
}

const questions = [
  {
    question: 'what is 2+2',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
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