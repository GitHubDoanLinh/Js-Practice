'use strict';
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function() {
  const text = document.querySelector('textarea').value;
  const words = text.split('\n');
  for (const [i, word] of words.entries()) {
    const [first, second] = word.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});