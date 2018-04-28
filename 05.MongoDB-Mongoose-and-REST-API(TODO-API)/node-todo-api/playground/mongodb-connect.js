/**
1. Make folder directory mongo-data
2. connect mongod on terminal with to mongo-data path
    mongod --dbpath ~/yourpath/mongo-data
*/
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/Todoapp', (err, db) => {
    if (err) {
        return console.loog('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.close();
});