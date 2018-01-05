import { generateGame, giveSmRandNumb } from '..';

const message = 'What number is missing in this progression?';

const makeProgression = (num1, num2) => {
  const progressionArr = [num1];
  const makeProgressionRecursive = (arr, num) => {
    if (arr.length === 10) return arr;
    arr.push(arr[arr.length - 1] + num2);
    return makeProgressionRecursive(arr, num);
  };
  return makeProgressionRecursive(progressionArr, num2);
};

const makeProgressionGame = () => {
  const num1 = giveSmRandNumb();
  const num2 = giveSmRandNumb();
  const num3 = giveSmRandNumb() - 1;
  const progression = makeProgression(num1, num2);
  const correctAnswer = progression[num3];
  progression[num3] = '..';
  const question = progression.join(' ');
  return { question, correctAnswer };
};

const progressionBrainGame = generateGame(makeProgressionGame, message);

export default progressionBrainGame;
