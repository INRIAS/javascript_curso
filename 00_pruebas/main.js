function decodeMe(morseCode) {
  var ref = {
    '.-': 'a',
    '-...': 'b',
    '.': 'e',
    '--.': 'g',
    '..': 'i',
    '-.': 'n',
    '...': 's',
    '..-': 'u'
  };
  return morseCode
    .split('  ')
    .map((a) =>
      a
        .split(' ')
        .map((b) => ref[b])
        .join('')
    )
    .join(' ');
}

// var encoded = 'g e n i u s b g a';
var encoded = '--. . -. .. ..- ... -... --. .-';
var decoded = decodeMe(encoded);
console.log('Fix me and apply ===> bit.ly/' + decoded);
