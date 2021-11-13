const os = require('os');
const log = require('./logger')

setInterval(() =>
{
    const { freemem, totalmem } = os;

    const total = parseInt(totalmem() / 1024 / 1024);
    const mem = parseInt(freemem() / 1024 / 1024);
    const percents = parseInt((mem / total) * 100);

    const status = {
        free: `${mem} MB`,
        total: `${total} MB`,
        usage: `${percents} %`
    };

    
    console.clear();
    log(`${JSON.stringify(status)}\n`);
}, 1000);
