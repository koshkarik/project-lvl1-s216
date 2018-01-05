import { generateGame, giveRandNumb } from '..';

const message = 'Is this number prime?';

const isPrime = (numb) => {
  if (numb === 0 || numb === 1) return false;
  let check = Math.floor(numb / 2);
  while (check >= 2) {
    if (numb % check === 0) {
      return false;
    }
    check -= 1;
  }
  return true;
};

const makePrimeGame = () => {
  const question = giveRandNumb();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const primeGame = generateGame(makePrimeGame, message);

export default primeGame;
