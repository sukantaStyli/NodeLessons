const databaseConnect = require('./Monogdb')

const updateData = async()=>{
    let connect = await databaseConnect();
    let data =await connect.updateOne({productName: 'iPad II'},{$set:{price: '59807'}})
    console.log(data.acknowledged)
}

updateData();