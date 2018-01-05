import { generateGame, giveRandNumb } from '..';

const message = 'Answer "yes" if number even otherwise answer "no".';

const oddEven = randNumb => (randNumb % 2 === 0 ? 'yes' : 'no');

const makeOddEvenGame = () => {
  const number = giveRandNumb();
  return { question: number, correctAnswer: oddEven(number) };
};

const oddEvenBrainGame = generateGame(makeOddEvenGame, message);

export default oddEvenBrainGame;

