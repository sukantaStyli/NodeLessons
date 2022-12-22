module.exports = {
    a:10,
    b:20,
    c: (arr)=>{
        return arr.filter((item)=>{
            return item%2 === 0;
        })
    }
}