const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuote");
const copyBtn = document.getElementById("copy");
const soundBtn = document.getElementById("sound");
const instagramBtn = document.getElementById("instagram");

const quotes = [
  { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { quote: "Do something today that your future self will thank you for.", author: "Sean Patrick Flanery" },
  { quote: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
  { quote: "Great things never come from comfort zones.", author: "Unknown" },
  { quote: "Your limitation—it’s only your imagination.", author: "Unknown" },
  { quote: "Sometimes later becomes never. Do it now.", author: "Unknown" },
  { quote: "Hard work beats talent when talent doesn’t work hard.", author: "Tim Notke" },
  { quote: "Don’t stop when you’re tired. Stop when you’re done.", author: "Marilyn Monroe" },
  { quote: "Wake up with determination. Go to bed with satisfaction.", author: "Unknown" },
  { quote: "Little things make big days.", author: "Isabel Marant" },
  { quote: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
  { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
  { quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" }
];

function getRandomQuote(){
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.innerText = quotes[randomIndex].quote;
  authorText.innerText = "— " + quotes[randomIndex].author;
}

newQuoteBtn.addEventListener("click", getRandomQuote);


copyBtn.addEventListener("click", ()=>{
  navigator.clipboard.writeText(
    quoteText.innerText + " " + authorText.innerText
  );
  alert("Quote copied!");
});


soundBtn.addEventListener("click", ()=>{
  let speech = new SpeechSynthesisUtterance(
    quoteText.innerText + " by " + authorText.innerText
  );
  speechSynthesis.speak(speech);
});


instagramBtn.addEventListener("click", ()=>{
  const text = encodeURIComponent(
    quoteText.innerText + " " + authorText.innerText
  );

  window.open("https://www.instagram.com/", "_blank");

  alert("Copy the quote and paste it on Instagram post or story!");
});


getRandomQuote();