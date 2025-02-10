// const promise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("hey Noman")
//         resolve()
//     },1000)
//     // resolve();
// })
// promise.then(function(){
//     console.log("Resolve is completed and then also")
// })

new Promise(function(resolve,reject){
 setTimeout(()=>{
    console.log("Hey Noman")
    resolve();
 },1000)
 
}).then(()=>{
    console.log("Promise is completed")
})