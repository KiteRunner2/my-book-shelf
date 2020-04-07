// const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
require('dotenv').config();
const db_user = process.env.DB_USER || '';
const db_pass = process.env.DB_PASS || '';
const db_name = process.env.DB_NAME || 'Bookshelf';
const db_host = process.env.DB_HOST || 'mongodb://localhost/bookshelf';

mongoose.connect(db_host, {
    useNewUrlParser: true,
    user: db_user,
    pass: db_pass,
    authSource: db_name,
});

const db = mongoose.connection;
const MySchema = new mongoose.Schema(
    {
        // day:Date,
        // exercises:[
        //     {
        //     type:String,
        //     name:String,
        //     duration:Number,
        //     weight:Number,
        //     reps:Number,
        //     sets:Number
        //     }
        // ]
    },
    { strict: false }
);
db.Workout = mongoose.model('Bookshelf', MySchema);

module.exports = db;
