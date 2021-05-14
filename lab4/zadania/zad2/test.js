var expect = require('chai').expect;
// to run: ../node_modules/mocha/bin/mocha
describe('The file() function', function() {
  it('Returns true if example.txt contains \'example\'', function() {
    var result = files('/Users/michal/Desktop/Javascript/lab4/zadania/zad2/example.txt/');
    expect(result).to.include('example');
  });
//   it('Returns 0 for -2+2', function() {
//     var op = new Operation(-2,2);
//     expect(op.sum()).to.equal(0);
//   });
});

function files(path){
    var fs = require('fs');
    // var path = process.argv[2];
    // console.log('myArgs: ', path);
    if(fs.existsSync(path)){
        console.log("jest to katalog");
    }
    else if(fs.existsSync(path.substring(0, path.length-1))){
        path = path.substring(0,path.length-1);
        console.log("to jest plik");
        var contents = fs.readFileSync(path, 'utf8');
        console.log(contents);
        return contents;
    }
    else{
        console.log("a co my tu mamy nic tu nie mamy");
    }
    return null;
}

//node ../../node_modules/mocha/bin/mocha