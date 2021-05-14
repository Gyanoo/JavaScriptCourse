var fs = require('fs');

var path = process.argv[2];
console.log('myArgs: ', path);

if(fs.existsSync(path)){
    console.log("jest to katalog");
}
else if(fs.existsSync(path.substring(0, path.length-1))){
    path = path.substring(0,path.length-1);
    console.log("to jest plik");
    var contents = fs.readFileSync(path, 'utf8');
    console.log(contents);
}
else{
    console.log("a co my tu mamy nic tu nie mamy");
}

// var contents = fs.readFileSync('/Users/michal/Desktop/Javascript/lab4/zadania/zad1/module.js', 'utf8');
// console.log(contents);