import { generateGame, giveRandNumb } from '..';

const gcd = (firstNumb, secondNumb) => {
  const smallestNumb = Math.min(firstNumb, secondNumb);
  const biggestNumb = Math.max(firstNumb, secondNumb);
  function findRecursive(smallest, biggest, div = 1) {
    if (smallest % div === 0 && biggest % (smallest / div) === 0) return smallest / div;
    if (div > smallest / 3) return !(smallest % 2) && !(biggest % 2) ? 2 : 1;
    return findRecursive(smallest, biggest, div + 1);
  }
  return findRecursive(smallestNumb, biggestNumb);
};

const makeGcdGame = () => {
  const num1 = giveRandNumb();
  const num2 = giveRandNumb();
  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2);
  return { question, correctAnswer };
};

const message = 'Find the greatest common divisor of given numbers.';

const gcdBrainGame = generateGame(makeGcdGame, message);

export default gcdBrainGame;
