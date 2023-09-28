const alphabetArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function encoder() {
  const text = document.querySelector("#input").value;
  const key = Number(document.querySelector("#key").value);
  const output = document.querySelector(".output");
  output.textContent = "";

  let newArray = alphabetArr.slice();
  // Buchstaben ausschneiden
  const removed = newArray.splice(0, key);

  // verschobenes Alphabet
  for (let i = 0; i < removed.length; i++) {
    newArray.push(removed[i]);
  }
  console.log(newArray);
  console.log(alphabetArr);

  //   damit alles klein und zusammen geschrieben wird
  const word = text.split(" ").join("").toLowerCase();

  for (let k = 0; k < word.length; k++) {
    const ursprungsBuchstabe = alphabetArr.indexOf(word[k]);
    console.log(ursprungsBuchstabe);
    for (let l = 0; l < newArray.length; l++) {
      if (ursprungsBuchstabe === l) {
        output.textContent += newArray[l].toUpperCase();
      }
    }
  }
}

function decoder() {
  const text = document.querySelector("#input").value;
  const key = Number(document.querySelector("#key").value);
  const output = document.querySelector(".output");
  output.textContent = "";

  let newArray = alphabetArr.slice();
  const removed = newArray.splice(0, key);

  for (let i = 0; i < removed.length; i++) {
    newArray.push(removed[i]);
  }
  console.log(newArray);
  console.log(alphabetArr);

  const word = text.split(" ").join("").toLowerCase();

  for (let k = 0; k < word.length; k++) {
    console.log(word[k]);
    const ursprungsBuchstabe = newArray.indexOf(word[k]);
    console.log(ursprungsBuchstabe);
    for (let l = 0; l < alphabetArr.length; l++) {
      if (ursprungsBuchstabe === l) {
        console.log(alphabetArr[l]);
        output.textContent += alphabetArr[l].toUpperCase();
      }
    }
  }
}
