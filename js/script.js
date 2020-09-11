/*** 
 * `quotes` array that stores quotes that will be seen when visiting the site
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
  
  printQuote(); /* function so that a random quote will show up when appearing on the site or refreshing it. */
  
  /***
   * The `getRandomQuote` function will CREATE a RANDOM number and return it as an OBJECT from the Quotes array.
  ***/
  
  function getRandomQuote () {
  
    let i = Math.floor(Math.random() * quotes.length); 
    let quote = quotes[i]; 
   
    if (i !== quotes[i]) {
      return quote;
    }
  }
  
  /***
   * The `printQuote` function grabs a quote at RANDOM and displays it for user
  ***/
  
  function printQuote() {
    
    let randomQuote = getRandomQuote();
  
    let html = '';
  
    html += ` 
      <p class="quote">${randomQuote.quote}</p>
      <p class="source">${randomQuote.source}
    `; // Shows quote source and quote
    
    if (randomQuote.year) { // Shows year and citation
      html += `
          <span class="citation">${randomQuote.citation}</span>
          <span class="year">${randomQuote.year}</span>
        </p>
      `;
    } else if (randomQuote.tags) { // Shows tags and citation
      html += `
          <span class="citation">${randomQuote.citation}</span>
          <span class="tags"> Tags: ${randomQuote.tags}</span>
        </p>
      `;
    } else if (randomQuote.citation) { //Displays citation
      html += `
          <span class="citation">${randomQuote.citation}</span>
        </p>
      `;
    } 
  
    random_bg_color(); // Random background color funtion for each time a quote is generated on display
  
    return document.getElementById('quote-box').innerHTML = html; 
  }
  
  function random_bg_color() {  // function that generates random Numbers for color used for the background color change
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
  } 
  
  setInterval(printQuote, 20000); // Will generate a random quote and color change every 20 secs.
  
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);