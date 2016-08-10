## Description

Log into TIYO with node & electron

## install

`npm install --save tiyo-login`

## Usage

Replace your email and password into:

```
var login = require('tiyo-login');
login('email@domain.com', 'MY_SWEET_PASSWORD', function(err, result) {
  if(err) {
    throw err;
  }
  console.log(result);
});
```

## Limitations

Does not currently handle social logins
Uses electron, not a formal API.
Relatively slow
