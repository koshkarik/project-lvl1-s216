import { giveRandNumb, askQuestion, userAnswer, explainWrongAnswer } from '..';

export const message = 'Answer "yes" if number even otherwise answer "no".';

export const oddEven = () => {
  const randNumb = giveRandNumb();
  askQuestion(randNumb);
  const answer = userAnswer();
  const correctAnswer = randNumb % 2 === 0 ? 'yes' : 'no';
  if (answer === correctAnswer) {
    return true;
  }
  explainWrongAnswer(answer, correctAnswer);
  return false;
};
