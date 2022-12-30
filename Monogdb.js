//importing MongoClient from mongodb...
const {MongoClient} = require("mongodb");  // can also be written as < const xyz = require("mongodb").MongoClient >

//set the url of the database to be connected.
const url = 'mongodb://localhost:27017';


const client = new MongoClient(url);


//------
//storing up the database name and table in variables in case these changes in future.
const database = 'e-comm';
const table = 'products';

//------------

// setting up the async function which will connect to the database and fetch the information

const databaseConnect = async()=>{
    let result = await client.connect();
    let db = result.db(database);
    return db.collection(table);
}

module.exports = databaseConnect;