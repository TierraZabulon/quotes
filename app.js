// fetch(url).then(function (response) {
// 	return response.json();
// }).then(function (data) {
// 	return response.json();
// }
// document.querySelector("#btnGen").addEventListener("click", quoteButton);
// function quoteButton() {
//   const quoteText = (document.getElementById("quote").placeholder = "message");
// }

// const quoteButton = document.querySelector("#btnGen");
// quoteButton.addEventListener("click", getQuote);
// const url = "https://type.fit/api/quotes";

// async function getQuote() {
//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw Error(response.statusText);
//     }

//     const json = await response.json();
//     console.log(json);
//   } catch (err) {
//     console.log(err);
//     alert("Failed to fetch new quote");
//   }
// }

// function getQuote() {
//   const quoteText = (document.getElementById("quote").placeholder = "message");
// }
// function displayQuote(quote) {
//   const quoteText = document.getElementById("quote");
//   quoteText.placeholder = quote;

// }

let myArr = [
  "When you have a dream, youve got to grab it and never let go.",
  "Nothing is impossible. The word itself says I am possible!",
  "Keep your face always toward the sunshine, and shadows will fall behind you.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "You define your own life. Don/’t let other people write your script.",
  "You are never too old to set another goal or to dream a new dream.",
  "Spread love everywhere you go.",
  "Belief creates the actual fact.",
];
let random = myArr.length;
for (let i = 0; i < random; i++) {
  console.log(myArr[i]);
}
function randomItems(items) {
  return items[Math.floor(Math.random() * items.length)];
}
document.querySelector("#btnGen").addEventListener("click", quoteButton);
function quoteButton() {
  document.getElementById("quote").placeholder = randomItems(myArr);
}
