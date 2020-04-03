var quizId = document.querySelector("#quiz");

var resultsId = document.querySelector("#results");

var buttonId = document.querySelector("#results");


// List of questions for quiz

var quizQestions =[
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




// Build out the structure of the quiz

var preQuiz = function() {}

var showResults = function() {}


buttonId.addEventListener("click", showResults);