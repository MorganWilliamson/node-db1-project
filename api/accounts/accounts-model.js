const db = require('../../data/dbConfig.js');

module.exports = {
    getAllAccounts() {
        return db('accounts');
    },
    getById(id) {
        return db('accounts').where({ id }).first()
    },
    // createAccount(account) {

    // },
    // updateAccount(id, account) {

    // },
    // deleteAccount(id) {

    // }
}