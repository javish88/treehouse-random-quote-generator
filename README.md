# random-quote-generator

## Create an Array of objects to store the data for your quotes

A data structure is necessary to store and organize the quotes in your app. A basic array of objects is a lightweight way to store information.

## In your js/script.js file:

Create a variable named quotes and set it equal to an empty array.

Add a minimum of five empty objects to your quotes array.

## Add data to your quote objects

The objects in the quotes array store the individual properties of the quotes.

Add the following properties to each quote object:

quote - string - the actual quote

source - string - the person or character who said it

Add a citation property to at least one quote object. The value should be a string holding a reference to the source of the quote, like the book, movie or song where the quote originates.

Add a year property to at least one quote object. The value should be a string or number representing the year the quote originated.

## Create the getRandomQuote function

The getRandomQuote function should create a random number, and use that random number to return a random quote object from the quotes array.

## Create a function named getRandomQuote.

In the function body, create a variable to store a random number ranging from zero to the index of the last item in the quotes array.

Lastly, the function should return a random quote object using the random number variable above and bracket notation on the quotes array.

## Pause development and test your code

Use console.log() inside of the getRandomQuotes function to log out the random number and the random quote object from the quotes array.

Call the getRandomQuote() function immediately after the function definition to run the code inside, including the new log statements.

Create the printQuote function
The app should display a new quote each time the user clicks the "Show another quote" button using a printQuote function.

## Create a function named printQuote.

You will program the printQuote function to perform three tasks: call the getRandomQuote function, use the returned quote object to build a string of HTML and quote properties, then use that string to display a random quote in the browser.

In the body of the printQuote function, create a variable to store a random quote object from the getRandomQuote() function.

Create another variable to store the HTML string. Set it equal to a string containing two <p> elements. Use this code snippet as a guide for what the HTML string should look like at this point:

<p class="quote"> A random quote </p>
<p class="source"> quote source </p>

The first <p> element should have a class equal to “quote”, and the random quote object’s .quote property nested between the opening and closing <p> tags.

The second <p> element should have a class equal to “source”, and the random quote object’s .source property nested between the tags.

## Important Notes:

Do not include the second closing </p> tag for now – you will add it at the end of this step.
You can use template literals here if you’re comfortable with that approach. But if you use traditional strings instead, be sure to wrap the strings in single quotes, so that the HTML classes can use their recommended double quotes.

## Create two separate if statements below the variables. You will need to add decision making to this function:

If the random quote object has a citation property, concatenate a <span> element with the class "citation" to the HTML string.

If the random quote object has a year property, concatenate a <span> element with the class "year" to the HTML string.

Use the following code snippet as a guide for what the HTML string should look like with the added "citation" and "year" <span> elements (like earlier, omit the second closing </p> tag for now):

<p class="quote"> A random quote </p>
<p class="source"> quote source
  <span class="citation"> quote citation </span>
  <span class="year"> quote year </span>
</p>

Below the if statements, complete the string by concatenating a closing </p> tag to the HTML string. This is the closing tag for the second paragraph with the class source.

Lastly, set the printQuote function to return the full HTML string displaying a random quote.

Use the following code snippet, along with the variable storing the string you’ve assembled, to update your project’s HTML with a random quote:

document.getElementById('quote-box').innerHTML = yourStringHere; 

## Finishing the project

The final stage of the project is perhaps the most important. This is where your developer skills really shine as you carefully double-check that you've accomplished all requirements.

Code comments - It’s a best practice for development code to be well commented. Replace provided comments with your own to briefly describe your code.

Code readability - Readability is second only to functionality. Double-check your code to ensure the spacing and indentation is consistent.

Cross browser consistency - To pass, your project only needs to work in Chrome. But it’s common for developers to test their projects in multiple browsers to know how they will perform out in the wild.

Quality Assurance Testing - This is the keystone step in the development process.

Open and run your app.

Open the Chrome DevTools console.

Pretend to be a user and test all aspects of functionality and every possible state of the app, while monitoring the console for bugs and resolving any that arise.

## Extra

## Additional quote object property

Printed quotes display an additional property that adds context. For example, a tags property could include a list of "tags" like "humor", "business", or "politics" to categorize a quote.

Add at least one extra property to at least one quote object.

Add the new property to the HTML string similarly to how you added the “year” and “citation” properties.

## Random background colors

When a new quote prints to the page, the background color changes to a random color.

Create a function that updates the background color to a random color.

## Auto-refreshed quotes

The quote on the page automatically updates at regular intervals.

Create a timing function with the setInterval() method to print a new quote to the page at regular intervals, like every 10 to 20 seconds.