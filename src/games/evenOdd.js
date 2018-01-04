import { generateGame } from '..';

const message = 'Answer "yes" if number even otherwise answer "no".';

const oddEven = (randNumb) => {
  const correctAnswer = randNumb % 2 === 0 ? 'yes' : 'no';
  return { question: randNumb, correctAnswer };
};

const oddEvenBrainGame = generateGame(oddEven, message, 1);

export default oddEvenBrainGame;

