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

// let myArr = [
//   "When you have a dream, youve got to grab it and never let go.",
//   "Nothing is impossible. The word itself says I am possible!",
//   "Keep your face always toward the sunshine, and shadows will fall behind you.",
//   "Success is not final, failure is not fatal: it is the courage to continue that counts.",
//   "You define your own life. Do not let other people write your script.",
//   "You are never too old to set another goal or to dream a new dream.",
//   "Spread love everywhere you go.",
//   "Belief creates the actual fact.",
//   "“In a gentle way, you can shake the world.",
//   "Try to be a rainbow in someone’s cloud.",
//   "Wake up determined, go to bed satisfied.",
// ];
// let random = myArr.length;
// for (let i = 0; i < random; i++) {
//   console.log(myArr[i]);
// }
// function randomItems(items) {
//   return items[Math.floor(Math.random() * items.length)];
// }
// document.querySelector("#btnGen").addEventListener("click", quoteButton);
// function quoteButton() {
//   document.getElementById("quote").placeholder = randomItems(myArr);
// }

// let quote = document.querySelector("#quote");
// let button = document.querySelector("#btnGen");
// let authorName = document.querySelector("#author-name");
// getQuote();

// async function getQuote() {
//   let res = await fetch("https://type.fit/api/quotes");
//   let data = await res.json();

//   let getRandomQuote = Math.floor(Math.random() * data.length);
//   if (data[getRandomQuote].author == null) {
//     authorName.innerHTML = "Unknown";
//   } else {
//     authorName.innerHTML = data[getRandomQuote].author;
//   }
//   quote.innerHTML = `${data[getRandomQuote].text}`;
// }

// btnGen.addEventListener("click", getQuote);

// let authorName = document.getElementById("author-name");
// getQuote();
// let button = document.getElementById("quoteButton");
// let quote = document.getElementById("quote");

// async function getQuote() {
//   let res = await fetch("https://type.fit/api/quotes");
//   let data = await res.json();

//   let getRandomQuote = Math.floor(Math.random() * data.length);
//   if (data[getRandomQuote].author == null) {
//     authorName.innerHTML = "Unknown";
//   } else {
//     authorName.innerHTML = data[getRandomQuote].author;
//   }
//   quote.innerHTML = `${data[getRandomQuote].text}`;
// }
let authorName = document.getElementById("author-name");
getQuote();
let button = document.getElementById("btnGen");
let quote = document.getElementById("quote");

async function getQuote() {
  let res = await fetch("https://type.fit/api/quotes");
  let data = await res.json();

  let getRandomQuote = Math.floor(Math.random() * data.length);
  if (data[getRandomQuote].author == null) {
    authorName.innerHTML = "Unknown";
  } else {
    authorName.innerHTML = data[getRandomQuote].author;
  }
  quote.innerHTML = `${data[getRandomQuote].text}`;
}

button.addEventListener("click", getQuote);
