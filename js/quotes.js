const quotes = [
  {
    quote: '"The road to success and the road to failure are almost exactly the same."',
  },
  {
    quote: '"It is better to fail in originality than to succeed in imitation."',
  },
  {
    quote: '"Success is walking from failure to failure with no loss of enthusiasm."',
  },
  {
    quote: '"All progress takes place outside the comfort zone."',
  },
  {
    quote: '"Success usually comes to those who are too busy to be looking for it."',
  },
  {
    quote: '"The way to get started is to quit talking and begin doing."',
  },
  {
    quote: '"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful."',
  },
  {
    quote: '"Success seems to be connected with action. Successful people keep moving."',
  },
  {
    quote: '"In order to succeed, we must first believe that we can."',
  },
  {
    quote: '"The only place where success comes before work is in the dictionary."',
  },
];

const quote = document.querySelector('#quote span:first-child')

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;