var quotes = [
    {
    text:'Be yourself; everyone else is already taken.',
    author: 'Oscar Wilde'
    },
    {
     text:'Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.',
    author: 'Marilyn Monroe'
    },
    {
    text:'So many books, so little time.',
    author: 'Frank Zappa'
    },
    {
    text:'Two things are infinite: the universe and human stupidity; and Im not sure about the universe',
    author: 'Albert Einstein'
    },
    {
    text:'A room without books is like a body without a soul',
    author: 'Marcus Tullius Cicero'
    }
]

function generateQuotes() {
    var random = Math.floor(Math.random() * quotes.length);
    var quote = quotes[random]
    document.getElementById('text').innerHTML=`"${quote.text}"`;
    document.getElementById('author').innerHTML=`-${quote.author}`;
}