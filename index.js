const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and How Can we Check for it',
  'What is the Difference Between StopPropagation and PreventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'What is JSONP?'
];


function titleCased() {
  return tutorials.map(function(title) {
    let words = title.split(" ");
    let capitalizedWords = words.map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(" ");
  });
}

// Test the function
console.log(titleCased());
