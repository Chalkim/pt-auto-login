#!/usr/bin/env node
const fs = require('fs');
const axios = require('axios-https-proxy-fix');

const file = `${__dirname}/config.json`;
const config = JSON.parse(fs.readFileSync(file));

if(config.proxy.enable){
    axios.defaults.proxy=config.proxy.config;
}

config.pt.map((item) => {
    axios.request(item).then(
        (response) => {
            console.log(`${item.url}\t${response.statusText}`);
        }
    );
});
