// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  string =string.split(" "); 
  return string;
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  let spots = wins * 3 + ties * 1;
  return spots;
}

// Desafio 6
function highestCount(arr) {
  let bigger = arr[0];
  let repeat = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > bigger) {
      bigger = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === bigger) {
      repeat++;
    }
  }
  return repeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let calc1 = Math.abs(mouse - cat1);
  let calc2 = Math.abs(mouse - cat2);
  if (calc1 > calc2) {
    return 'cat2';
  } else if (calc2 > calc1) {
    return 'cat1';
  } else if (calc1 === calc2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode(all) {
  all=all.replace(/a/g, "1");
  all=all.replace(/e/g, "2");
  all=all.replace(/i/g, "3");
  all=all.replace(/o/g, "4");
  all=all.replace(/u/g, "5");
  return all;
}

function decode(oll) {
  oll=oll.replace(/1/g, "a");
  oll=oll.replace(/2/g, "e");
  oll=oll.replace(/3/g, "i");
  oll=oll.replace(/4/g, "o");
  oll=oll.replace(/5/g, "u");
  return oll;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
