import { giveRandNumb, askQuestion, userAnswer, make } from '..';

const message = 'Answer "yes" if number even otherwise answer "no".';

const oddEven = () => {
  const randNumb = giveRandNumb();
  askQuestion(randNumb);
  const answer = userAnswer();
  const correctAnswer = randNumb % 2 === 0 ? 'yes' : 'no';
  if (answer === correctAnswer) {
    return { flag: true, answer, correctAnswer };
  }
  return { flag: false, answer, correctAnswer };
};

const oddEvenBrainGame = make(message, oddEven);

export default oddEvenBrainGame;

