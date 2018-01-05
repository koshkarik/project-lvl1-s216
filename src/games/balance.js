import { generateGame, giveRandNumb } from '..';

const message = 'Balance the given number.';

const balance = (arr) => {
  const workArr = arr.slice().sort((a, b) => a - b);
  if (workArr[workArr.length - 1] - workArr[0] <= 1) return workArr;
  workArr[0] += 1;
  workArr[workArr.length - 1] -= 1;
  return balance(workArr);
};

const makeBalanceGame = () => {
  const question = String(giveRandNumb()) + String(giveRandNumb());
  const numbArr = question.split('').map(item => Number(item));
  const correctAnswer = balance(numbArr).join('');
  return { question, correctAnswer };
};

const balanceBrainGame = generateGame(makeBalanceGame, message);

export default balanceBrainGame;
