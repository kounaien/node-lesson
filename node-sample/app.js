
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

// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const Joi = require('joi');
// const  app = express();


// app.use('/public', express.static(path.join(__dirname, 'static')));
// app.use(bodyParser.urlencoded({extended: false}));
// // app.use(bodyParser.json());

// app.get('/', (req, res)=> {
//     res.sendFile(path.join(__dirname, 'static', 'index.html'));
// });

// app.post('/',(req, res)=>{
//     console.log(req.body);
//     // const schema = Joi.object().keys({
//     //     email : Joi.string().trim().email().required(),
//     //     password : Joi.string().min(5).max(10).required()
//         const schema = Joi.object({
//             email : Joi.string().trim().email().required(),
//             password : Joi.string().min(5).max(10).required()
//         });
    
//         const result = schema.validate(req.body)

//         if(result.error){
//             console.log(result.error);
//             res.send('an error has occured');
//         }
//         else{
//             console.log(result);
//             res.send('successfully send data')
//         };
// });

// app.get('/example', (req, res)=>{
//     res.send('hitting example route');
// });

// app.get('/example/:name/:age', (req, res)=> {
//     console.log(req.params);
//     console.log(req.query);
//     res.send(req.params.name + " : " + req.params.age);
// });

// app.listen(3000);


// const Joi = require('joi')

// const arrayString = ['banana', 'bacon', 'chesee'];
// const arrayObjects = [{example: 'example1'}, {example: 'example2'}]

// const userInput = { personalInfo: {
//         streerAddress: '12345678',
//         city: 'kfjoai',
//         state: 'fj'
//     },
//     preferences: arrayString};


// const personalInfoSchema = Joi.object().keys({
//     streetAddress: Joi.string().trim().required(),
//     city: Joi.string().trim().required(),
//     state: Joi.string().trim().length(2).required()
// })

// const preferencesSchema = Joi.array().items(Joi.object().keys({
//     example: Joi.string().trim().required()
// }));

// const schema = Joi.object().keys({
//     personalInfo: personalInfoSchema,
//     preferences: preferencesSchema
// });

// const result = schema.validate(userInput)

// if(result.err)
//     console.log(result.err);
// else(result)
//     console.log(result);


// const express = require('express');
// const path = require('path');
// const app = express();

// app.use('/public', express.static(path.join(__dirname, 'static')));
// app.set("view engine", "ejs");
// app.get('/:userQuery', (req,res)=>{
//     res.render('index', {data: {userQuery: req.params.userQuery,
//         searchResults : ['book', 'book2', 'book3'],
//         loggedIn: true,
//         username: 'jfioew'
//     }});
// });

// app.listen(3000);

// const express = require('express');
// const bodyparser = require('body-parser');
// const app = express();

// app.use(bodyparser.json());
// app.use((req,res,next)=>{
//     req.banana = 'banana'
//     console.log(req.url,req.method);
//     next();
// });

// app.get('/', (req,res)=>{
//     console.log(req.banana);
//     res.send('MiddleWare');
// });

// app.listen(3000);

const express = require('express');
const path = require('path');
const app = express();

app.use('/public', express.static(path.join(__dirname,'static')));
app.set('view engine', 'ejs');

const people = require('./routes/people');

app.use('/people', people);

app.listen(3000);