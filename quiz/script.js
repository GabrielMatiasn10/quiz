const questions = [
  {
    question: "o que é HTML?",
    choices: [ "estilo de pagina"," Linguagem de Marcação de Hipertexto", "linguagem de programação de desenvolvimento web" ,"Nao sei",],
    answer: "Linguagem de Marcação de Hipertexto",
  },
  {
    question: "O que é CSS?",
    choices: ["  linguagem de marcação de estilo", " linguagem de programação de desenvolvimento web", "uma funcion mobile"  ,"Nao sei",],
    answer: "linguagem de marcação de estilo",
  },
  {
    question: " O que é JavaScript?",
    choices: [, "DOM", "Linguagem de Marcação de Hipertexto", "linguagem de programação de desenvolvimento web" ,"",],
    answer: "linguagem de programação de desenvolvimento web",
  },
  {
    question: " O que é DOM?",
    choices: ["Estruturada e hierárquica de um documento HTML", "linguagem de programação de desenvolvimento web", "Uma funcion" ,"Nao sei",],
    answer: "Estruturada e hierárquica de um documento HTML",
  },
  {
    question: "Qual é String?",
    choices: [" 1243", " '1234'", "Uma função", "Nao sei",],
    answer: "'1234'",
  },
  {
    question: "Qual é a capital do Canadá?",
    choices: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    answer: "Ottawa",
  },
  {
    question: "Qual é a capital dos Estados Unidos?",
    choices: ["Nova York", "Los Angeles", "Chicago", "Washington D.C."],
    answer: "Washington D.C.",
  },
  {
    question: "Qual é a capital do Reino Unido?",
    choices: ["Liverpool", "Manchester", "Edimburgo", "Londres"],
    answer: "Londres",
  },
];

const questionElement = document.getElementById("question");
const choiceElements = Array.from(document.getElementsByClassName("choice"));
const nextButton = document.getElementById("next");
const scoreElement = document.getElementById("score");
const wrongElement = document.getElementById("wrong");

let currentQuestion = 0;
let score = 0;
let wrong = 0;
let answerChosen = false;

function loadQuestion() {
  const currentQuestionData = questions[currentQuestion];
  questionElement.innerText = currentQuestionData.question;

  const choices = shuffleArray(currentQuestionData.choices);
  for (let i = 0; i < choiceElements.length; i++) {
    choiceElements[i].innerText = choices[i];
  }
  answerChosen = false; 
}

function checkAnswer(e) {
  if (answerChosen) return;
  answerChosen = true;

  if (e.target.innerText === questions[currentQuestion].answer) {
    score++;
    scoreElement.innerText = "Pontuação: " + score;
    alert("Correto!");
  } else {
    wrong++;
    wrongElement.innerText = "Erros: " + wrong;
    alert(
      "Errado! A resposta correta é " + questions[currentQuestion].answer + "."
    );
  }
}

choiceElements.forEach((element) => {
  element.addEventListener("click", checkAnswer);
});

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  wrong = 0;
  scoreElement.innerText = "Pontuação: 0";
  wrongElement.innerText = "Erros: 0";
  loadQuestion();
}

nextButton.addEventListener("click", () => {
  if (!answerChosen) {
    alert("Por favor, escolha uma resposta antes de prosseguir.");
    return;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    alert(
      "Fim do Quiz! Você acertou " +
        score +
        " de " +
        questions.length +
        " perguntas."
    );
    restartQuiz();
  }
});

function shuffleArray(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

loadQuestion();