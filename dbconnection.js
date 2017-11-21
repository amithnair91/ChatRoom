const Promise = require('bluebird');
const initOptions = {
    promiseLib: Promise
};
const pgp = require('pg-promise')(initOptions);
const cn = {
    host: 'ec2-54-235-65-224.compute-1.amazonaws.com',
    port: 5432,
    database: 'd1rv4r6kj9ev6q',
    user: 'xeggfykrztskpo',
    password: '8d9d1c9300debb7cb62932ae35923cd56de47fd25a2f941ef81d669b3c827838'
};

// const localdbConnection = {
//     host: 'localhost',
//     port: 5432,
//     database: 'chatapp',
//     user: 'postgres',
//     password: ''
// };

console.log('Connecting to DB')
const db = pgp(cn);

module.exports = {
    db,
};