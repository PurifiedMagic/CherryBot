/*********************************************************************************************************
 * Chinda, G 2018. A quick and complete guide to Mocha testing, LogRocket, URL: 
 * https://blog.logrocket.com/a-quick-and-complete-guide-to-mocha-testing-d0e0ea09f09d
 * 
 * Utilising this code for reference and training purposes
 *********************************************************************************************************/
// test/md5.js
var md5 = require('../mocha/md5');
var expect = require('chai').expect;

describe('#md5()', function() {

  context('with string argument', function() {
    it('should compute MD5 hash', function(done) {
    
      md5('Glad Chinda', function(err, hash) {
        // call the done() callback with the error if any
        // to terminate the test with an error
        if (err) return done(err);
        
        // add some assertions
        expect(hash)
          .to.be.a('string')
          .that.matches(/^[a-f0-9]{32}$/)
          .and.equal('877dbb93f50eb8a89012e15bd37ee7e4');
          
        // finally call the done() callback
        // to terminate the test
        done();
      })
      
    })
  })
  
  context('with non-string argument', function() {
    it('should throw an error', function(done) {
    
      md5(12345, function(err, hash) {
        // call the done() callback with the error if any
        // to terminate the test
        if (err) {
        
          // add an assertion to check the error
          expect(function() { throw err })
            .to.throw(TypeError, 'The "data" argument must be one of type string, TypedArray, or DataView. Received type number');
            
          // finally call the done() callback
          // to terminate the test and return
          return done();
          
        }
        
        // call the done() callback
        // to terminate the test
        done();
      })
      
    })
  })
  
})
