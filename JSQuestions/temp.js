function convertSnakeCaseToCamelCase(str) {
  let words = str.split("_");
  let camelCase = words[0];

  for (let word of words.slice(1)) {
    // let word = words[i];
    camelCase += word[0].toUpperCase() + word.slice(1);
  }

  return camelCase;
}

console.log(convertSnakeCaseToCamelCase("hello_world")); // helloWorld
console.log(convertSnakeCaseToCamelCase("snake_case_to_camel_case")); // snakeCaseToCamelCase
