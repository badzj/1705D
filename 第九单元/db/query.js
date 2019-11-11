const connection = require('./db')

module.exports = (mysql, param=[]) => {
    return new Promise((resolve, reject) => {
        connection.query(mysql, param, (error, data) => {
            if (error) {
                reject(error)
            } else {
                resolve(data)
            }  
        })
    })
}