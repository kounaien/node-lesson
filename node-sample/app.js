
// const tutorial = require('./tutorial'); //slash means that it's within the same exact path that this file is currently in
// console.log(tutorial.sum(1,1));
// console.log(tutorial.PI);
// console.log(new tutorial.SomeMathObject());
// // console.log(tutorial(1,1));


// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('tutorial', (num1, num2) => {
//     console.log(num1 + num2);
// })

// eventEmitter.emit('tutorial', 1,2);

// class Person extends EventEmitter {
//     constructor(name){
//         super();
//         this._name = name;
//     }

//     get name(){
//         return this._name;
//     }
// }


// let pedro = new Person('Pedro');
// let christina = new Person('Christina');
// christina.on('name', () => {
//     console.log('my name is ' + christina.name)
// })
// pedro.on('name', () => {
//     console.log('my name is ' + pedro.name);
// });

// pedro.emit('name');
// christina.emit('name');


// const readline = require('readline');
// const rl = readline.createInterface({input : process.stdin,
//                                         output : process.stdout}) ;
// let num1 = Math.floor((Math.random() * 10) + 1);
// let num2 = Math.floor((Math.random() * 10) + 1);
// let answer = num1 + num2;

// rl.question(`What is ${ num1 }' + '${ num2 }? \n`,
// (userInput) => {
//     if(userInput.trim() == answer) {
//         rl.close();
//     }
//     else{
//         rl.setPrompt('Incorrect response please try again \n');
//         rl.prompt();
//         rl.on('line', (userInput)=>{
//             if(userInput.trim() == answer)
//             rl.close();
//             else{
//                 rl.setPrompt(`Your answer of ${ userInput} is incorrect try again\n`);
//                 rl.prompt();
//             }
//         })
//     }
//     // console.log(userInput);
// })

// rl.on('close', () => {
//     console.log('Corrrect!!!!!');
// })


// const fs = require('fs');
// // create a file
// fs.writeFile('example.txt', "this is an example", (err)=>{
//     if(err)
//     console.log(err);
//     else{
//         console.log('File successfully created');
//         fs.readFile('example.txt', 'utf8',  (err, file)=>{
//             if(err)
//             console.log(err);
//             else{
//                 console.log(file);
//             }
//         })
//     }
// })

// fs.rename('example.txt', 'example2.txt', (err)=>{
//     if(err)
//     console.log(err);
//     else{
//         console.log('successfully rename the file');
//     };
// })

// fs.appendFile('example2.txt', 'Some data being appended', (err)=>{
//     if(err)
//     console.log(err);
//     else{
//         console.log('successfully appended data to file');
//     }
// })

// fs.unlink('example2.txt', (err)=>{
//     if(err)
//     console.log(err);
//     else{
//         console.log('successfully deleted file');
//     }
// })


// const fs = require('fs');

// fs.mkdir('tutorial', (err)=>{
//     if(err)
//     console.log(err);
//     else{
//         fs.writeFile('./tutorial/example.txt', '123', (err)=>{
//             if(err)
//             console.log(err);
//             else{
//                 console.log('successfully created')
//             }
//         })
//         // fs.rmdir('tutorial', (err)=>{
//         //     if(err)
//         //     console.log(err);
//         //     else{
//         //         console.log('successfully deleted folder');
//             // }
//         // })
//         // console.log('folder successfully created');
//     }
// })

//first we deleted the file that was within the folder
// fs.unlink('./tutorial/example.txt', (err)=>{
//     if(err)
//     console.log(err);
//     else{
//             fs.rmdir('tutorial', (err)=>{
//             if(err)
//                 console.log(err);
//             else{
//                 console.log('deleted folder')
//             }
//         });
//     }
// });

// fs.readdir('example', (err, files)=>{
//     if(err)
//         console.log(err);
//     else{
//         for(let file of files){
//             fs.unlink('./example/' + file, (err)=>{
//                 if(err)
//                     console.log(err);
//                 else{
//                     console.log('successfully deleted file')
//                 }
//             })
//         }
//     }
// })

// const fs = require('fs');
// const zlib = require('zlib');
// const gunzip = zlib.createGunzip();
// const readStream = fs.createReadStream('./example2.txt.gz', );
// const writeStream = fs.createWriteStream('example2.txt');        
// readStream.pipe(gunzip).pipe(writeStream);       
// readStream.on('data', (chunk)=> {
//     writeStream.write(chunk);
// });

// fs.readFile('./example.txt', 'utf-8', (err, file)=>{
//     if(err)
//         console.log(err);
//     else{
//         console.log(file);
//     }
// })

// const http = require('http');
// const server = http.createServer((req, res)=>{
//     if(res.url === '/'){
//         res.write('hello world from nodejs');
//         res.end();
//     }
//     else{
//         res.write('using some other domain');
//         res.end();
//     }
// });

// server.listen('3000');


// const http = require('http');
// const fs = require('fs');
// http.createServer((req, res)=>{
//     const readStream = fs.createReadStream('./static/index.html');
//     res.writeHead(200, {'Content-type': 'text/html'});
//     readStream.pipe(res);
// }).listen(3000);

// const _ = require('lodash');
// let example = _.fill([1,2,3,4,5], "banana", 1, 4);
// console.log(example);

const express = require('express');
const  app = express();

app.get('/', (req, res)=> {
    res.send('hello world');
});

app.listen(3000);


