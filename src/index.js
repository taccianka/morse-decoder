const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let arraySymbols = [];
  for (let i = 0; i < expr.length; i = i + 10) {
    let symbolBinary = expr.substring(i, i + 10);
    if (symbolBinary.includes('*')) {
      arraySymbols.push(' ');
      continue;
    }
    symbolBinary = symbolBinary.replace(/11/g, '-');
    symbolBinary = symbolBinary.replace(/10/g, '.');
    symbolBinary = symbolBinary.replace(/00/g, '');
    arraySymbols.push(MORSE_TABLE[symbolBinary]);

  }
  return arraySymbols.join('');
}

module.exports = {
  decode,
};