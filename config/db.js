require('dotenv').config();
const mongoose = require('mongoose');

function connectDB(){
    //database connection
    mongoose.connect(process.env.MONGO_CONNECTION_URL, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology:true, useFindAndModify: true});

    const connection = mongoose.connection;
    //url has password and etc therefore we will use env package
    connection.once('open',()=>{
        console.log('Database connected');
    }).catch(err => {
        console.log('Connection failed');
    })
}

module.exports = connectDB;