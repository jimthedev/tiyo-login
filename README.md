## Description

Log into TIYO with node & electron

## install

`npm install --save tiyo-login`


## Setup (if running on an Ubuntu server without a screen)

Nightmare.js (which tiyo-login uses) depends on electron which needs a virtual screen when running on a server as described here:  https://github.com/segmentio/nightmare/issues/224

To use nightmare.js you will need to run the following on Ubuntu:

```
apt-get update && apt-get install -y xvfb x11-xkb-utils xfonts-100dpi xfonts-75dpi xfonts-scalable xfonts-cyrillic x11-apps clang libdbus-1-dev libgtk2.0-dev libnotify-dev libgnome-keyring-dev libgconf2-dev libasound2-dev libcap-dev libcups2-dev libxtst-dev libxss1 libnss3-dev gcc-multilib g++-multilib
```


Then to run your app:

```
DEBUG=nightmare xvfb-run --server-args="-screen 0 1024x768x24" node app.js
```


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
