const databaseConnect = require("./Monogdb");

const insertData = async () => {
  let connection = await databaseConnect();
  let result = await connection.insert([
    {
        productName: 'Max 20',
        category: 'gadget',
        price: '48900'
    }
  ]);
  console.log(result.acknowledged ? "Data inserted" : "insertion failed");
};

insertData();
