// Write a javascript function that reverses the order of words in a sentence without using the built-in reverse() method.

const reverseSentence = (sentence) => {
  let words = sentence.split(" ");
  let reversedWords = [];
  for (let i = words.length - 1; i >= 0; i--) {
    reversedWords.push(words[i]);
  }

  return reversedWords.join(" ");
};

console.log(reverseSentence("I am a Kaushik Jain"));
