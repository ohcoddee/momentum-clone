const quotes = [
  {
    quotes: "A year from now you will wish you had started today.",
    author: "Karen Lamb",
  },
  {
    quotes: "Creativity is intelligence having fun.",
    author: "Maya Angelou",
  },
  {
    quotes: "You are confined only by the walls you build yourself.",
    author: "Maya Angelou",
  },
  {
    quotes: "You are confined only by the walls you build yourself.",
    author: "Andrew Murphy",
  },
  {
    quotes: "Be kind, everyone you meet is fighting a hard battle.",
    author: "Ian Maclaren",
  },
  {
    quotes: "The journey of a thousand miles begins with a single step.",
    author: "Lao Tzu",
  },
  {
    quotes: "Never confuse a single defeat with a final defeat.",
    author: "F.Scott Fitzgerald",
  },
  {
    quotes: "Anyone who has never made a mistake has never tried anything new.",
    author: "Albert Einstein",
  },
  {
    quotes: "It is in the moment of decisions that your destiny is shaped.",
    author: "Anthony Robbins",
  },
  {
    quotes: "Don't dream, Be it",
    author: "Tim curry",
  },
];

const test = [{ quotes: "AAA", author: "BBBB" }, {}, {}, {}, {}];

const quote = document.querySelector("#quote span:nth-child(1)");
const author = document.querySelector("#quote span:nth-child(2)");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;
