const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


function capWords(str) {
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }
  return str.join(" ");
}


// function titleCased(array) {
//   return array.map(string => capWords(string))


function titleCased () {
  return tutorials.map(function(string) {
    capWords(string)
   }
  )
}