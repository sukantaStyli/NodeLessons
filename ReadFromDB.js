// also this is for rea


const databaseConnect = require('./Monogdb')


const main = async () =>{
    let data = await databaseConnect();
    data = await data.find().toArray();
    console.log(data);
}

main();
