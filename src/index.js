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

// generates random number between 1 and 100
export const giveRandNumb = () => Math.floor((Math.random() * 100) + 1);

// asks your desired question before game begins
export const askQuestion = str => console.log(`Question: ${str}`);

// uses readlineSync and returns user input - so you don't have to handle this library
export const userAnswer = () => readlineSync.question('Your answer: ');

// takes wrong and correct answer and returns console.log with those values
export const explainWrongAnswer = (answer, correctAnswer) => console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);

// Main constructor.
// You have to put message of the quiz as first argument and function as second argument.
// This function should return true or false value, depending on user answer!
// Also before return false you have to use explainWrongAnswer to provide answer to user
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

