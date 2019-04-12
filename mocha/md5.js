/*********************************************************************************************************
 * Chinda, G 2018. A quick and complete guide to Mocha testing, LogRocket, URL: 
 * https://blog.logrocket.com/a-quick-and-complete-guide-to-mocha-testing-d0e0ea09f09d
 * 
 * Utilising this code for reference and training purposes
 *********************************************************************************************************/
// ./mocha/md5.js
var crypto = require('crypto');

module.exports = function(string, callback) {
  var withCallback = typeof callback === 'function';
  
  try {
  
    var hash = crypto.createHash('md5')
      .update(string)
      .digest('hex');
      
    withCallback && callback(null, hash);
    
  } catch (e) {
    if (withCallback) callback(e);
    else throw e;
  }
}