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
const askQuestion = str => console.log(`Question: ${str}`);

// uses readlineSync and returns user input - so you don't have to handle this library
const userAnswer = () => readlineSync.question('Your answer: ');

// takes wrong and correct answer and returns console.log with those values
const explainWrongAnswer = (answer, correctAnswer) => console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);

// makes fixed length array with random numbers
const makeArrWithRandomNumbers = num => Array(num).fill(null).map(item => giveRandNumb(item));

// our gameFunc should return object
// {message: message before the game, question: task(string), correctAnswer }
const makeGame = (gameFunc, message, argsNum) => {
  let attempt = 0;
  welcomeMsg();
  console.log(`${message}\n`);
  const name = sayHello();
  while (attempt !== 3) {
    const argsArray = makeArrWithRandomNumbers(argsNum);
    const gameInfo = gameFunc(...argsArray);
    askQuestion(gameInfo.question);
    const answer = userAnswer();
    if (answer === String(gameInfo.correctAnswer)) {
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

const gameBuilder = makeGameFunc => (game, message, argsNum) =>
  () => makeGameFunc(game, message, argsNum);

// in your game section put game as first argument, task message as second argument,
// quantity of random numbers needed for game function, than export it to bin file and call it!
export const generateGame = gameBuilder(makeGame);
