const fs = require("fs");

let arr =["./file1.txt","./file2.txt","./file3.txt","./file4.txt","./file5.txt"];

let filePromise = fs.promises.readFile(arr[0]);

// filePromise.then(function(data){
//     console.log(data+"");
//     let file2Promise = fs.promises.readFile(arr[1]);
//     return file2Promise;
// }).then(function(data){
//     console.log(data+"");
//     let file3Promise = fs.promises.readFile(arr[2]);
//     return file3Promise;
// }).then(function(data){
//     console.log(data+"");
//     let file4Promise = fs.promises.readFile(arr[3]);
//     return file4Promise;
// }).then(function(data){
//     console.log(data+"");
//     let file5Promise = fs.promises.readFile(arr[4]);
//     return file5Promise;
// }).then(function(data){
//     console.log(data+"");
// })
// ****************************************************************************************
// if there are 100 files then its not possible to write so using loop for all files;
for(let i = 1;i<arr.length; i++ ){
    filePromise = filePromise.then(function(data){
        console.log(data+"");
        let nextFilePromise = fs.promises.readFile(arr[i]);
        return nextFilePromise;
    })
}
// for last file remaining data
filePromise.then(function(data){{
    console.log(data+"");
}})
