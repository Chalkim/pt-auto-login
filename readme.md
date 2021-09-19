# pt-auto-login

pt-auto-login is a tiny project to help you login or register your attendance automatically. For those pt sites which require regular login, this tiny script can't be more suitable. 

## Installation

Required:

- [nodejs](https://nodejs.org)

To install:

    git clone https://github.com/chalkim/pt-auto-login.git
    cd pt-auto-login
    npm install

## Usage

For first use, you should copy config-template.json to config.json. Then modify the example fields.

You can run it with nodejs.

    node app.js

or

    npm start

## Configuration:

config.json

```
{
    "proxy": {
        "enable": false,
        "config": {
            "protocol": "https",
            "host": "127.0.0.1",
            "port": 8889
        }
    },
    "pt": [
        {
            "url": "https://url/of/pt/site",
            "method": "get",
            "headers": {
                "Cookie": "your cookie"
            }
        },
        {
            "url": "https://url/of/pt/site",
            "method": "post",
            "headers": {
                "Cookie": "your cookie"
            },
            "data": "action=sign_in"
        }
    ]
}
```
