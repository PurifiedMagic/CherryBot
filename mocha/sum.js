/*********************************************************************************************************
 * Chinda, G 2018. A quick and complete guide to Mocha testing, LogRocket, URL: 
 * https://blog.logrocket.com/a-quick-and-complete-guide-to-mocha-testing-d0e0ea09f09d
 * 
 * Utilising this code for reference and training purposes
 *********************************************************************************************************/
// ./mocha/sum.js
module.exports = function() {
    
  //Convert arguments object to an array
  var args = Array.prototype.slice.call(arguments);

  //Throw an error if arguments contain non-finite number values
  if (!args.every(Number.isFinite)) {
    throw new TypeError("sum() expects only numbers.")
  }

  //Return the sum of the arguments
  return args.reduce(function(a, b) {
    return a + b
  }, 0)
}