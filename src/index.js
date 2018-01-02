import readlineSync from 'readline-sync';

// still need to export those functions for braingames.js in bin
export const welcomeMsg = () => {
  console.log('Welcome to the Brain Games!');
};

export const sayHello = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}! \n`);
  return userName;
};

// all helpers functions
export const giveRandNumb = () => Math.floor((Math.random() * 100) + 1);

export const askQuestion = str => console.log(`Question: ${str}`);

export const userAnswer = () => readlineSync.question('Your answer: ');

export const explainWrongAnswer = (answer, correctAnswer) => console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);

// Main constructor.
// You have to put message of the quiz as first argument and function as second argument.
// This function should return true or false value, depending on user answer!
const makeGame = (quizMsg, gameAndCheckFunc) => {
  let attempt = 0;
  welcomeMsg();
  console.log(`${quizMsg}\n`);
  const name = sayHello();
  while (attempt !== 3) {
    if (gameAndCheckFunc()) {
      attempt += 1;
      console.log('Correct!');
    } else {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default makeGame;

