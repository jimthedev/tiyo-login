var phantomjs = require('phantomjs-prebuilt')
var Horseman = require('node-horseman');
var isEmail = require('isemail');

var horseman = new Horseman({
  phantomPath: phantomjs.path,
  timeout:10000
});

var signInPageUrl = 'https://online.theironyard.com/users/sign_in';

module.exports = function login(email, password, callback) {

  // Ensure email address used
  if(email && email.length && email.length > 0 && !isEmail.validate(email)) {
    callback(new Error('Email address required.'));
  }

  if(password && password.length && password.length < 1) {
    callback(new Error('Password required.'))
  }

  horseman
    .viewport(3200, 1800)
    .open(signInPageUrl)
    .type('#user_email', email)
    .type('#user_password', password)
    .click('#new_user [type=submit]')
    .then(function(){
        return horseman.waitForNextPage();
    })
    // .waitForSelector('.dashboard, .l-main')
    // .screenshot('big.jpg')
    .evaluate(function () {
      var results = {};
      results.admin = document.querySelector('body').classList.contains("admin")
      results.finalUrl = window.location.href;
      return results;
    })
    .then(function (result) {
      if(result.finalUrl === signInPageUrl) {
      }
      var finalResult = Object.assign(result, {
        email: email,
        authed: result.finalUrl !== signInPageUrl
      });
      callback(undefined, finalResult);
    })
    .catch(function (error) {
      callback(error);
    })
}
