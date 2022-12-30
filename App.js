module.exports = {
    a:10,
    b:20,
    c: (arr)=>{
        return arr.filter((item)=>{
            return item%2 === 0;
        })
    }
}


//------ understanding promises deeply
let a1 = new Promise((res, rej)=>{
    setTimeout(()=>{
        res(10)
    },2000)
})


let a2 = new Promise((res, rej)=>{
    setTimeout(()=>{
        res(90)
    },100)
})

a3 = 30

console.log("jaldi chal")
a1.then((data)=> a2.then((data2)=>console.log(data+data2+a3)))

console.log("hum first")
