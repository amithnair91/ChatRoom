const Promise = require('bluebird');
const initOptions = {
    promiseLib: Promise
};
const pgp = require('pg-promise')(initOptions);
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'chatapp',
    user: 'postgres',
    password: ''
};

console.log('Connecting to DB')
const db = pgp(cn);

module.exports = {
    db,
};