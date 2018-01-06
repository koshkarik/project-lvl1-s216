import { makeGame, giveRandNumb } from '..';

const message = 'Is this number prime?';

const isPrime = (numb) => {
  const checker = Math.floor(numb / 2);
  if (numb === 0 || numb === 1) return false;
  function primeCheck(number, checkNum) {
    if (checkNum <= 2) return true;
    if (numb % checkNum === 0) return false;
    const newCheck = checkNum - 1;
    return primeCheck(numb, newCheck);
  }
  return primeCheck(numb, checker);
};

const makePrimeGame = () => {
  const question = giveRandNumb();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const primeGame = () => makeGame(makePrimeGame, message);

export default primeGame;
