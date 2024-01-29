const mongoose = require('mongoose');
const dbName = process.env.MONGODB_DB;
const mongoUrl = process.env.MONGODB_CONNECTION_URL + dbName

module.exports.initialize = (result) => {
    mongoose.connect(mongoUrl, {  })
        .then(() => {
            result()
        }).catch((err) => {
            console.log(err)
            result(err)
        })
    mongoose.Promise = global.Promise;
} 