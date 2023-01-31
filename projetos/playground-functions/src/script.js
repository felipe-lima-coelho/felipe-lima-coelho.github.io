// Desafio 1 - Crie a função compareTrue
const compareTrue = (par1, par2) => {
  if (par1 && par2) {
    return true;
  }
  return false;
};

// Desafio 2 - Crie a função splitSentence
const splitSentence = (frase) => frase.split(' ');

// Desafio 3 - Crie a função concatName
const concatName = (arrayNomes) => {
  const concatenacao = `${arrayNomes[arrayNomes.length - 1]}, ${arrayNomes[0]}`;

  return concatenacao;
};

// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins, ties) => {
  const pointsWins = wins * 3;
  const pointsTies = ties * 1;
  const totalPoints = pointsWins + pointsTies;

  return totalPoints;
};

// Desafio 5 - Crie a função highestCount
const highestCount = (arrayNumbers) => {
  let higherNumber = arrayNumbers[0];
  let sum = 0;

  for (let i in arrayNumbers) {
    if (arrayNumbers[i] > higherNumber) {
      higherNumber = arrayNumbers[i];
      sum = 1;
    } else if (arrayNumbers[i] === higherNumber) {
      sum += 1;
    }
  }

  return sum;
};

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
const calcTriangleArea = (base, height) => {
  const area = (base * height) / 2;

  return area;
};

const calcRectangleArea = (base, height) => {
  const area = base * height;

  return area;
};

const calcAllAreas = (base, height, form) => {
  if (form === 'triângulo') {
    return `O valor da área do ${form} é de: ${calcTriangleArea(base, height)}`;
  } if (form === 'retângulo') {
    return `O valor da área do ${form} é de: ${calcRectangleArea(base, height)}`;
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
};

// Desafio 7 - Crie a função catAndMouse
const catAndMouse = (mouse, cat1, cat2) => {
  const dist1 = Math.abs(cat1 - mouse);
  const dist2 = Math.abs(cat2 - mouse);

  if (dist1 < dist2) {
    return 'cat1';
  } if (dist2 < dist1) {
    return 'cat2';
  } if (dist1 === dist2) {
    return 'os gatos trombam e o rato foge';
  }
};

// Desafio 8 - Crie a função fizzBuzz
const fizzBuzz = (arrayNumbers) => {
  const arrayString = [];

  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (Number.isInteger(arrayNumbers[i] / 3) && Number.isInteger(arrayNumbers[i] / 5)) {
      arrayString.push(`fizzBuzz`);
    } else if (Number.isInteger(arrayNumbers[i] / 3)) {
      arrayString.push(`fizz`);
    } else if (Number.isInteger(arrayNumbers[i] / 5)) {
      arrayString.push(`buzz`);
    } else {
    arrayString.push(`bug!`);
    }
  }

  return arrayString;
};

// Desafio 9 - Crie a função encode e a função decode
const encode = (word) => {
  let newWord = '';

  for (let i = 0; i < word.length; i += 1) {
    if (word[i] === 'a') {
      newWord += 1;
    } else if (word[i] === 'e') {
      newWord += 2;
    } else if (word[i] === 'i') {
      newWord += 3;
    } else if (word[i] === 'o') {
      newWord += 4;
    } else if (word[i] === 'u') {
      newWord += 5;
    } else {
      newWord += word[i];
    }
  }

  return newWord;
};

const decode = (word) => {
  let newWord = '';

  for (let i = 0; i < word.length; i += 1) {
    if (word[i] === '1') {
      newWord += 'a';
    } else if (word[i] === '2') {
      newWord += 'e';
    } else if (word[i] === '3') {
      newWord += 'i';
    } else if (word[i] === '4') {
      newWord += 'o';
    } else if (word[i] === '5') {
      newWord += 'u';
    } else {
      newWord += word[i];
    }
  }

  return newWord;
};

// Desafio 10 - Crie a função techList
const techList = (arrayTech, nome) => {
  const alphabArrayTech = arrayTech.sort();
  let arrayObj = [];

  if (alphabArrayTech.length && nome.length) {
    for (let i = 0; i < alphabArrayTech.length; i += 1) {
      arrayObj[i] = {};
      arrayObj[i].tech = alphabArrayTech[i];
      arrayObj[i].name = nome;
    }
  }

  return arrayObj;
};

// Desafio 11 - Crie a função generatePhoneNumber
const calcRepet = (arrayNumbers) => {
  let sum = 0;

  for (let ia = 0; ia < arrayNumbers.length; ia += 1) {
    for (let ib = 0; ib < arrayNumbers.length; ib += 1) {
      if (arrayNumbers[ia] === arrayNumbers[ib]) {
        sum += 1;
      }
    }

    if (sum >= 3) {
      return true;
    }

    sum = 0;
  }

  return false;
};

const generatePhoneNumber = (arrayNumbers) => {
  let telNumber = '(';

  if (arrayNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] < 0 || arrayNumbers[i] > 9 || calcRepet(arrayNumbers)) {
      return 'não é possível gerar um número de telefone com esses valores';
    } else if (i === 1) {
      telNumber += `${arrayNumbers[i]}) `;
    } else if (i === 6) {
      telNumber += `${arrayNumbers[i]}-`;
    } else {
      telNumber += arrayNumbers[i];
    }
  }

  return telNumber;
};

// Desafio 12 -  Crie a função triangleCheck
const triangleCheck = (lineA, lineB, lineC) => {
  const medLadoMenor = lineA > (lineB + lineC) || lineB > (lineA + lineC) || lineC > (lineA + lineB);
  const medDifAbs = lineA > Math.abs(lineB - lineA) || lineB > Math.abs(lineB - lineC) || lineC > Math.abs(lineA - lineB);

  if(medLadoMenor && medDifAbs) {
    return false;
  }
  return true;
};

// Desafio 13 - Crie a função hydrate
const hydrate = (word) => {
  let sum = 0;

  for (let char of word) {
    if (isNaN(parseInt(char, 10))) {
      sum += 0;
    } else {
      sum += parseInt(char, 10);
    }
  }

  if (sum > 1) {
    return `${sum} copos de água`;
  }

  return `${sum} copo de água`;
};
