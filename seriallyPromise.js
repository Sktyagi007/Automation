let fs = require("fs");

let filePromise = fs.promises.readFile("file.txt");

filePromise.then(function(data){
    console.log(data+"");
    let file2Promise = fs.promises.readFile("file1.txt");
    return file2Promise;
}).then(function(data){
    console.log(data+"");
}).catch(function(error){
    console.log(error);
})