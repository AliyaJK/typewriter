const typewriteSentence = function(sentence) {
  let i = 0;
  function eachChar() {
    if (i < sentence.length) {
      process.stdout.write(sentence[i]);
      i++;
      setTimeout(eachChar, 50);
    }
  }
  eachChar();
  setTimeout(() => {
    process.stdout.write('\n');
  }, 50 * sentence.length + 100);
};

typewriteSentence("hello there from lighthouse labs");