var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: false })

module.exports = function login(username, password, callback) {
  nightmare
    .goto('https://online.theironyard.com/users/sign_in')
    .type('#user_email', username)
    .type('#user_password', password)
    .click('#new_user [type=submit]')
    .wait('.dashboard, .l-main')
    .evaluate(function () {
      var results = {};
      results.admin = document.querySelector('body').classList.contains("admin")
      results.redirect = window.location.href;
      return results;
    })
    .end()
    .then(function (result) {
      var finalResult = Object.assign(result, {
        username: username
      });
      callback(undefined, finalResult);
    })
    .catch(function (error) {
      callback(err);
    });
}
