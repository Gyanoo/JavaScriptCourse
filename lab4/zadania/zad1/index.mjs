import { Operation } from './module.mjs';
// const Operation = require('./module.mjs/index.js');
// operation = new Operation(5,22) //ERROR
// class Operation{
//     constructor(x, y){
//         this.x=x;
//         this.y=y;
//     }
//     sum(){
//         return this.x + this.y;
//     }
// }
/** get arguments from command line */
var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);
/** create operation with given x and y */
var operation = new Operation(parseInt(myArgs[0]),parseInt(myArgs[1]));
console.log(operation.sum());
