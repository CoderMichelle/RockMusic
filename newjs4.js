function hownow() {
  let userAnswer = prompt('How did I do? Please answer on a scale of 1-5');
  while (userAnswer < 1 || userAnswer > 5) {
    userAnswer = prompt('Incorrect! Please enter a number between 1 and 5');
  }
  // alert('Thank You For Your Rating');
  for (let i = 1; i <= userAnswer; i++) {
    document.write('<h1>' + 'yes' + '</h1>');
    document.write('<header><img src="https://media.tenor.com/images/cdcb04a1a037e7f844b90e41693a8d3f/tenor.gif"></img></header>');
  }
}

hownow();

// ''