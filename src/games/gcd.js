import { generateGame } from '..';

const message = 'Find the greatest common divisor of given numbers.';

const gcd = (firstNumb, secondNumb) => {
  const smallestNumb = firstNumb < secondNumb ? firstNumb : secondNumb;
  const biggestNumb = smallestNumb === firstNumb ? secondNumb : firstNumb;
  const question = `${firstNumb} ${secondNumb}`;
  function findRecursive(smallest, biggest, div = 1) {
    if (smallest % div === 0 && biggest % (smallest / div) === 0) return smallest / div;
    if (div > smallest / 3) return !(smallest % 2) && !(biggest % 2) ? 2 : 1;
    return findRecursive(smallest, biggest, div + 1);
  }
  const correctAnswer = findRecursive(smallestNumb, biggestNumb);
  return { question, correctAnswer };
};

const gcdBrainGame = generateGame(gcd, message, 2);

export default gcdBrainGame;
