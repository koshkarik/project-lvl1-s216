import { generateGame, giveRandNumb } from '..';

const message = 'Balance the given number.';

const balance = (numbStr) => {
  const numbArr = numbStr.split('').map(item => Number(item));
  function recurseBalance(arr) {
    let maxNumb = -Infinity;
    let minNumb = Infinity;
    let minIndex;
    let maxIndex;
    const workArr = arr.slice();
    arr.forEach((num, ind) => {
      if (num > maxNumb) {
        maxNumb = num;
        maxIndex = ind;
      }
      if (num < minNumb) {
        minNumb = num;
        minIndex = ind;
      }
    });
    if (maxNumb - minNumb <= 1) {
      return workArr;
    }
    workArr[maxIndex] -= 1;
    workArr[minIndex] += 1;
    return recurseBalance(workArr);
  }
  return recurseBalance(numbArr).sort((a, b) => a - b).join('');
};

const makeBalanceGame = () => {
  const question = String(giveRandNumb()) + String(giveRandNumb());
  const correctAnswer = balance(question);
  return { question, correctAnswer };
};

const balanceBrainGame = generateGame(makeBalanceGame, message);

export default balanceBrainGame;
