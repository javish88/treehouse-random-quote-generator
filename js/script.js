/*** 
 * `quotes` array 
***/
    
const quotes = [
    {
      quote: 'I Have Spoken',
      source: 'Kuiil',
      citation: 'The Mandalorian',
      tags: 'motivational'
    },
    {
      quote: 'I am a Mandalorian. Weapons are part of my religion',
      source: 'The Mandalorian'
    },
    {
      quote: 'This Is The Way',
      source: 'The Mandalorian',
      citation: 'Star Wars: The Mandalorian',
      year: 2019
    },
    {
      quote: `people seem to be getting dumber and dumber. You know, I mean we have all this amazing technology and yet computers have turned into basically four figure wank machines. The internet was supposed to set us free, democratize us, but all it's really given us is Howard Dean's aborted candidacy and 24 hour a day access to kiddie porn. People... they don't write anymore, they blog. Instead of talking, they text, no punctuation, no grammar: LOL this and LMFAO that. You know, it just seems to me it's just a bunch of stupid people pseudo-communicating with a bunch of other stupid people at a proto-language that resembles more what cavemen used to speak than the King's English`,
      source: 'Hank Moody',
      citation: 'Californication',
      year: 2007
    },
    {
      quote: 'The Most Important Thing Is To Try And Inspire People So That They Can Be Great In Whatever They Want To Do',
      source: 'Kobe Bryant',
      citation: 'Goalcast',
      tags: 'motivational'
    },
  ];
  
  printQuote(); 
  
  /***
   * The `getRandomQuote` function 
  ***/
  
  function getRandomQuote () {
  
    let i = Math.floor(Math.random() * quotes.length); 
    let quote = quotes[i]; 
   
    if (i !== quotes[i]) {
      return quote;
    }
  }
  
  /***
   * The `printQuote` function 
  ***/
  
  function printQuote() {
    
    let randomQuote = getRandomQuote();
  
    let html = '';
  
    html += ` 
      <p class="quote">${randomQuote.quote}</p>
      <p class="source">${randomQuote.source}
    `; 
    
    if (randomQuote.year) { 
      html += `
          <span class="citation">${randomQuote.citation}</span>
          <span class="year">${randomQuote.year}</span>
        </p>
      `;
    } else if (randomQuote.tags) { 
      html += `
          <span class="citation">${randomQuote.citation}</span>
          <span class="tags"> Tags: ${randomQuote.tags}</span>
        </p>
      `;
    } else if (randomQuote.citation) {
      html += `
          <span class="citation">${randomQuote.citation}</span>
        </p>
      `;
    } 
  
    random_bg_color();
  
    return document.getElementById('quote-box').innerHTML = html; 
  }
  
  function random_bg_color() { 
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
  } 
  
  setInterval(printQuote, 20000); 
  
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);