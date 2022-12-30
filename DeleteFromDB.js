const databaseConnect = require('./Monogdb')

const updateData = async()=>{
    let connect = await databaseConnect();
    let data =await connect.deleteOne({productName: 'Nothing Phone 3'})
    console.log(data.acknowledged)
}

updateData();