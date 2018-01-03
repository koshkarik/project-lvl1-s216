import { giveRandNumb, make } from '..';

const oddEven = () => {
  const randNumb = giveRandNumb();
  const correctAnswer = randNumb % 2 === 0 ? 'yes' : 'no';
  return { message: 'Answer "yes" if number even otherwise answer "no".', question: randNumb, correctAnswer };
};

const oddEvenBrainGame = make(oddEven);

export default oddEvenBrainGame;

