let a  = 10;
let b = 20;

let waitingData = new Promise((resolve, reject)=>{
    resolve(30)
})

waitingData.then((result)=>{
    b = result
})

console.log(a+b)

setTimeout(()=>{
    console.log(b+a)
}, 2000)

