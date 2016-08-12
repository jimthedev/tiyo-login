var Horseman = require('node-horseman');
var horseman = new Horseman({timeout:10000});

var signInPageUrl = 'https://online.theironyard.com/users/sign_in';

module.exports = function login(username, password, callback) {
  horseman
    .viewport(3200, 1800)
    .open(signInPageUrl)
    .type('#user_email', username)
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
        username: username,
        authed: result.finalUrl !== signInPageUrl
      });
      callback(undefined, finalResult);
    })
    .catch(function (error) {
      callback(error);
    })
    .close();
}
