const db = require('../../data/dbConfig.js');

module.exports = {
    getAllAccounts() {
        return db('accounts');
    },
    // getById(id) {

    // },
    // createAccount(account) {

    // },
    // updateAccount(id, account) {

    // },
    // deleteAccount(id) {

    // }
}