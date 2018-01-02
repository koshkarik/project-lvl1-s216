import readlineSync from 'readline-sync';

const giveRandNumb = () => Math.floor((Math.random() * 100) + 1);

const giveAndCheckAnswer = () => {
  const randNumb = giveRandNumb();
  console.log(`Question: ${randNumb}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = randNumb % 2 === 0 ? 'yes' : 'no';
  if ((randNumb % 2 === 0 && answer === 'yes') || (randNumb % 2 !== 0 && answer === 'no')) {
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export const welcomeMsg = () => {
  console.log('Welcome to the Brain Games!');
};

export const sayHello = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const oddEvenQuiz = () => {
  let attempt = 0;
  welcomeMsg();
  console.log('Answer "yes" if number even otherwise answer "no".');
  const name = sayHello();
  while (attempt !== 3) {
    if (giveAndCheckAnswer()) {
      attempt += 1;
      console.log('Correct!');
    } else {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
