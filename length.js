let words = ["hi", "hello", "language", "JavaScript"];

for (let word of words) {
  if (word.length < 5) {
    console.log(word + ": Short");
  } else if (word.length >= 5 && word.length <= 8) {
    console.log(word + ": Medium");
  } else {
    console.log(word + ": Long");
  }
}