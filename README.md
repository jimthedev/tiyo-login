## Description

Log into TIYO with node & horsemanjs

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


## Background

Previously I wrote this using Nightmare and Electron but I ran into several issues when it came to deploying it. Specifically running Nightmare can be, frankly a nightmare on droplets or servers without an actual screen. You can make it work using virtual screens but the experience isn't ideal. This is a rewrite using phantomjs via horsemanjs.
