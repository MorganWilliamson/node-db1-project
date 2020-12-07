const db = require('../../data/dbConfig.js');

module.exports = {
    getAllAccounts() {
        return db('accounts');
    },
    getById(id) {
        return db('accounts').where({ id }).first()
    },
    createAccount(account) {
        return db('accounts').insert(account)
            .then(([id]) => {
                return db('accounts').where('id', id).first()
            })
    },
    // updateAccount(id, account) {

    // },
    // deleteAccount(id) {

    // }
}