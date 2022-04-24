const fs = require("fs");
console.log("before");
let filePromise = fs.promises.readFile("file.txt");
let file2Promise = fs.promises.readFile("file1.txt");
// ------> Pending Promise
// console.log(filePromise); 


// if fulfilled
filePromise.then(function(data){
    console.log(data+"");
})
file2Promise.then(function(data){
    console.log(data+"");
})
// if rejected
filePromise.catch(function(error){
    console.log(error+"");
})
file2Promise.catch(function(error){
    console.log(error+"");
})

console.log("after");