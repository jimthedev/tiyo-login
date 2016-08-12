var login = require('../index.js');

login('me@domain.com', 'MY_SWEET_PASSWORD', function(err, result) {
  if(err) {
    throw err;
  }
  console.log(result);
  // If result.authed is true then the login succeeded
  // If result.admin is true then they are an instructor
  // or someone else with access to the admin dashboard
});
