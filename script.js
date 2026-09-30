const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Rome", "Paris", "Madrid"],
    answer: 2
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Mercury"],
    answer: 0
  },
  {
    question: "Which is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    answer: 2
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Mark Twain"],
    answer: 1
  },
  {
    question: "Which language is primarily used for Android app development?",
    options: ["C#", "Java", "Ruby", "Swift"],
    answer: 1
  }
];

let currentQuestion = 0;
let score = 0;

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const optionInputs = document.querySelectorAll('input[name="answer"]');
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const scoreText = document.getElementById("score-text");
const quizBox = document.getElementById("quiz-box");
const restartBtn = document.getElementById("restart-btn");

function loadQuestion() {
  const q = questions[currentQuestion];

  questionNumber.textContent = "Question " + (currentQuestion + 1);
  questionText.textContent = q.question;

  const labels = document.querySelectorAll(".option span");
  q.options.forEach((option, index) => {
    labels[index].textContent = option;
  });

  optionInputs.forEach(input => input.checked = false);
}

function checkAnswer() {
  const selected = document.querySelector('input[name="answer"]:checked');

  if (!selected) {
    alert("Please select an option before continuing.");
    return false;
  }

  const selectedIndex = Number(selected.value);

  if (questions[currentQuestion].answer === selectedIndex) {
    score++;
  }

  return true;
}

function showResult() {
  quizBox.classList.add("hidden");
  resultBox.classList.remove("hidden");
  scoreText.textContent = `Your score: ${score} / ${questions.length}`;
}

nextBtn.addEventListener("click", () => {
  if (!checkAnswer()) return;

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  resultBox.classList.add("hidden");
  quizBox.classList.remove("hidden");
  loadQuestion();
});

loadQuestion();
