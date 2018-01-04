import { generateGame } from '..';

const message = 'Balance the given number.';

const balance = (firstNumb, secondNumb) => {
  const question = String(firstNumb) + String(secondNumb);
  const numbArr = question.split('').map(item => Number(item));
  function recurseBalance(arr, max = -Infinity, min = Infinity) {
    let maxNumb = max;
    let minNumb = min;
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
  const correctAnswer = recurseBalance(numbArr).sort((a, b) => a - b).join('');
  return { question, correctAnswer };
};

const balanceBrainGame = generateGame(balance, message, 2);

export default balanceBrainGame;
