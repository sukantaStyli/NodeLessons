const fs = require('fs');
const path = require('path');
const folderPath = path.join(__dirname, "files")
// console.log(folderPath)
for(i=0; i<4; i++){
    fs.writeFileSync(`${folderPath}/abc${i}.txt`, `this is file ${i}`)
}