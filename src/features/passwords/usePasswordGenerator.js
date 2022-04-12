import { useCallback } from 'react';

const symbol = '~!@#$%^&*?()_+-=[]{}<>';
const number = '1234567890';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = lowercase.toUpperCase();
const all = symbol + number + lowercase + uppercase;

const getRandom = max => Math.floor(Math.random() * max)

const getRandomFromRange = (min, max) => Math.floor(min + getRandom(max - min));

const getRandomCharFromWord = word => Math.floor(Math.random() * word.length);

const pick = (word, min, max) => {
    
    let result = '';
    let numPicked = min;

    if (max !== undefined) {
        numPicked = getRandomFromRange(min, max);
    }

    for (let i = 0; i < numPicked; i++) {
        result += word.charAt(getRandomCharFromWord(word));
    }

    return result;
};

const shuffle = word => {
  let characters = word.split('');
  
  for (let i = characters.length; i > 0; i--) {
    let shuffle = getRandom(i + 1);
    
    const temp = characters[shuffle];
    characters[shuffle] = characters[i];
    characters[i] = temp;
  }
  
  return characters.join('');
};

export const usePasswordGenerator = () => {

    const generate = useCallback(() => {
        let password = pick(all, 5, 8);
        password += pick(lowercase, 3, 5);
        password += pick(uppercase, 3, 5);
        password += pick(number, 1);
        password += pick(symbol, 2);
        
        return shuffle(password);
    });

    return generate;
};