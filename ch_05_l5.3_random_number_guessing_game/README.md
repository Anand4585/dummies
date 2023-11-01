# Random Guessing Number Game

## Explanation

1. `<!DOCTYPE html>`: This line tells the web browser that the document is written in HTML, which is the language used to create web pages.

2. `<html lang="en">`: This is the starting point of an HTML document. It says that the content of the page is in English.

3. `<head>`: This is like the brain of the web page. It contains important information about the page but is not shown on the actual page.

4. `<meta charset="UTF-8" />`: This line tells the browser that the text on the page is using a special character encoding called UTF-8, which allows for different languages and special characters.

5. `<meta http-equiv="X-UA-Compatible" content="IE=edge" />`: This line is meant for older versions of Internet Explorer, and it's not very important for modern web pages.

6. `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`: This line helps make the web page look good on different devices like phones and tablets.

7. `<title>Random Number with a While Loop</title>`: This is the title of the web page, which you see at the top of your web browser tab.

8. `<body>`: This is the main part of the web page where the visible content goes.

9. `<div id="root"></div>`: This creates an empty area on the page with an ID called "root." We'll use this area to display something later.

10. `<script>`: This is where the JavaScript code starts. JavaScript is a programming language used to make web pages interactive.

11. `let guessNumber = 0;`: We create a variable called `guessNumber` and set it to 0. Think of it as a counter to keep track of how many times we try to guess a number.

12. `let numberToGuess = 71;`: We create another variable called `numberToGuess` and set it to 71. This is the number we want to guess.

13. `let guess;`: We create a variable called `guess` without setting a value yet. This is where we'll store our guessed numbers.

14. `while (guess != numberToGuess) {`: We start a "while loop." It's like a game where we keep guessing a number as long as our guess is not equal to the number we want to guess (71).

15. `guess = Math.floor(Math.random() * 100);`: Inside the loop, we guess a random number between 0 and 99 and store it in the `guess` variable.

16. `guessNumber++;`: We increase the `guessNumber` by 1 to count how many times we've guessed.

17. `}`: We end the while loop when our guess is equal to the number we want to guess.

18. `document.getElementById("root").innerHTML = `...`: After we've guessed the number, we use this line to change the content of the "root" area. We say "I guessed it!" and show how many tries it took.

That's it! The code guesses a random number over and over until it matches the number 71 and then tells you how many guesses it took.
