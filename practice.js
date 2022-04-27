const textarea = document.querySelector("#ourtext");
const button = document.querySelector("#button");

button.addEventListener("click", (e) => {
  const array = textarea.value.split("\n");

  for (let word of array) {
    word = word.trim();
    let firstWord = word.slice(0, word.indexOf("_"));
    let secondWord = word.slice(word.indexOf("_") + 1).toLowerCase();

    let secondUpper =
      secondWord.slice(0, 1).toUpperCase() + secondWord.slice(1);
    console.log(firstWord + secondUpper);
  }
});
