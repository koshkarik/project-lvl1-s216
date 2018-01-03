import { giveRandNumb, make } from '..';

const gcd = () => {
  const firstNumb = giveRandNumb();
  const secondNumb = giveRandNumb();
  const smallestNumb = firstNumb < secondNumb ? firstNumb : secondNumb;
  const biggestNumb = smallestNumb === firstNumb ? secondNumb : firstNumb;
  const question = `${firstNumb} ${secondNumb}`;
  const message = 'Find the greatest common divisor of given numbers.';
  function findRecursive(smallest, biggest, div = 1) {
    if (smallest % div === 0 && biggest % (smallest / div) === 0) return smallest / div;
    if (div > smallest / 3) return !(smallest % 2) && !(biggest % 2) ? 2 : 1;
    return findRecursive(smallest, biggest, div + 1);
  }
  const correctAnswer = findRecursive(smallestNumb, biggestNumb);
  return { message, question, correctAnswer };
};

const gcdBrainGame = make(gcd);

export default gcdBrainGame;
