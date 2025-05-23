var quotes = [
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    text: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    author: "Marilyn Monroe",
  },
  {
    text: "So many books, so little time.",
    author: "Frank Zappa",
  },
  {
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
    author: "Albert Einstein",
  },
];

function randomQuote() {
  if (quotes.length === 0) {
    alert("No quotes available.");
    return;
  }

  const index = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[index];

  document.getElementById(
    "quote"
  ).innerHTML = `<i class="fa-solid fa-quote-left"></i> 
  ${selectedQuote.text} <i class="fa-solid fa-quote-right"></i>`;

  document.getElementById("author").textContent = `– ${selectedQuote.author}`;

  quotes.splice(index, 1);
}
