let input = "this is me learning javascript ";

function capitalizeWords(text) {
  let words = text.split(" ");
  let capitalizedWords = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let capitalizedWord =
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    capitalizedWords.push(capitalizedWord);
  }

  return capitalizedWords.join(" ");
}

console.log(capitalizeWords(input));
