const question = document.querySelector('#quiz-painel__question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#quiz-painel__progress');
const questionsPainel = document.querySelector('.quiz-painel');
const resultPainel = document.querySelector('.result');
const tryAgain = document.querySelector('#result__btn-try-again');
const seeAnswers = document.querySelector('#result__btn-see-answers');
const score = document.querySelector('#result__score');

let currentQuestion = {};
let acceptingAnswers = true;
let questionCounter = 0;
let correctAnswerCount = 0;
let availableQuestion = [];
let cloneQuestionsPainel = [];
let clonedPainel = [];
let clonedChoices = [];
let index = 0;
let a = [];

let questions = [
  {
    question: 'Dentro de qual elemento HTML colocamos o JavaScript?',
    choice1: '<javascript>',
    choice2: '<script>',
    choice3: '<js>',
    choice4: '<scripting>',
    answer: 2,
  },
  {
    question: 'Como você escreve "Hello World" em uma caixa de alerta?',
    choice1: 'alert("Hello World");',
    choice2: 'alertBox("Hello World");',
    choice3: 'msg("Hello World");',
    choice4: 'msgBox("Hello World");',
    answer: 1,
  },
  {
    question: 'Como você cria uma função em JavaScript?',
    choice1: 'function:minhaFuncao()',
    choice2: 'function minhaFuncão()',
    choice3: 'function minhaFuncao()',
    choice4: 'function = minhaFuncao()',
    answer: 3,
  },
  {
    question: 'Como você chama uma função chamada "minhaFuncao"?',
    choice1: 'call minhaFuncao()',
    choice2: 'call function minhaFuncao()',
    choice3: 'minhaFuncao',
    choice4: 'minhaFuncao()',
    answer: 4,
  },
  {
    question:
      'Como escrever uma instrução IF para executar algum código se "i" NÃO for igual a 5?',
    choice1: 'if i <> 5',
    choice2: 'if(i != 5)',
    choice3: 'if(i <> 5)',
    choice4: 'if i =! 5 then',
    answer: 2,
  },
];

const maxQuestions = 5;

startQuiz = () => {
  questionCounter = 0;
  index = 0;
  clonedIndex = 0;
  correctAnswerCount = 0;
  availableQuestion = [...questions];

  getNewQUestion();
};

getNewQUestion = () => {
  questionCounter++;
  showResults();
  progressText.innerText = `${questionCounter} de ${maxQuestions}`;

  const questionIndex = Math.floor(Math.random() * availableQuestion.length);
  currentQuestion = availableQuestion[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number];
  });

  availableQuestion.splice(questionIndex, 1);

  acceptingAnswers = true;
};

showResults = () => {
  if (questionCounter > maxQuestions) {
    questionsPainel.style.display = 'none';
    resultPainel.style.display = 'flex';

    score.innerText = `Você certou ${correctAnswerCount} de ${maxQuestions}`;
  }
};

choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset['number'];

    let classToApply =
      selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
    if (classToApply == 'correct') correctAnswerCount++;
    selectedChoice.parentElement.classList.add(classToApply);
    clonedChoices[index] = classToApply;

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      cloneQuestionsPainel[index] = questionsPainel.cloneNode(true);
      cloneQuestionsPainel[index].setAttribute('class', 'cloned');
      index++;
      getNewQUestion();
    }, 1000);
  });
});

tryAgain.addEventListener('click', () => {
  questionsPainel.style.display = 'flex';
  resultPainel.style.display = 'none';

  startQuiz();
});

startQuiz();
