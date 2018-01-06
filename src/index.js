import readlineSync from 'readline-sync';

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

// generates random number between 1 and 10
export const giveSmRandNumb = () => Math.floor((Math.random() * 10) + 1);

// asks your desired question before game begins
const askQuestion = str => console.log(`Question: ${str}`);

// uses readlineSync and returns user input - so you don't have to handle this library
const userAnswer = () => readlineSync.question('Your answer: ');

// takes wrong and correct answer and returns console.log with those values
const explainWrongAnswer = (answer, correctAnswer) => console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);

// main function - game generator
export const makeGame = (gameFunc, message) => {
  let attempt = 0;
  welcomeMsg();
  console.log(`${message}\n`);
  const name = sayHello();
  while (attempt !== 3) {
    const gameInfo = gameFunc();
    askQuestion(gameInfo.question);
    const answer = userAnswer();
    if (answer === gameInfo.correctAnswer) {
      attempt += 1;
      console.log('Correct!');
    } else {
      explainWrongAnswer(answer, gameInfo.correctAnswer);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
