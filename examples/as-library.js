var login = require('../index.js');

/*
  // ERROR
  login('email@domain.com', 'MY_SWEET_PASSWORD', function(err, result) {
    if(err) {
      throw err;
    }
    console.log(result);
  });
*/
login('jim.cummins@theironyard.com', 'Jsbjsb03!', function(err, result) {
  if(err) {
    throw err;
  }
  console.log(result);
});
