"use strict";

var expect = chai.expect;

// function sum(x,y) {
// 	return x+y;
// }

// describe('The sum() function', function() {
//  it('Returns 4 for 2+2', function() {
//    expect(sum(2,2)).to.equal(4);
//  });
//  it('Returns 0 for -2+2', function() {
//    expect(sum(-2,2)).to.equal(0);
//  });
// });

describe('The cyfry() function', function(){
  it('Returns 3 for 111', function(){
    expect(cyfry("111")).to.equal(3);
  });
  it('Returns 0 for syop', function(){
    expect(cyfry("syop")).to.equal(0);
  });
  it('Returns 0 for abcd1234', function(){
    expect(cyfry("abcd1234")).to.equal(10);
  });
  it('Returns 0 for 1234abcd', function(){
    expect(cyfry("1234abcd")).to.equal(10);
  });
  it('Returns 0 for empty string', function(){
    expect(cyfry("")).to.equal(0);
  });
});

describe('The litery() function', function(){
  it('Returns 0 for 12345', function(){
    expect(litery("12345")).to.equal(0);
  });
  it('Returns 0 for qwerty', function(){
    expect(litery("qwerty")).to.equal(6);
  });
  it('Returns 0 for abcd1234', function(){
    expect(litery("abcd1234")).to.equal(4);
  });
  it('Returns 0 for 1234abcd', function(){
    expect(litery("1234abcd")).to.equal(4);
  });
  it('Returns 0 for empty string', function(){
    expect(litery("")).to.equal(0);
  });
});

describe('The suma() function', function(){
  it('Returns 0 for 1234', function(){
    expect(suma("1234")).to.equal(1234);
  });
  it('Returns 0 for abcd', function(){
    expect(suma("abcd")).to.equal(0);
  });
  it('Returns 0 for 1234abcd', function(){
    expect(suma("1234abcd")).to.equal(1234);
  });
  it('Returns 0 for abcd1234', function(){
    expect(suma("abcd1234")).to.equal(0);
  });
  it('Returns 0 for empty string', function(){
    expect(suma("")).to.equal(0);
  });
});



function cyfry(value){
  var out = new Array();
  out = value.split("");
  var sum = 0;
  for (var i=0; i<out.length; i++){
      if (!isNaN(Number(out[i]))){
        sum+=Number(out[i]);
      }
  }
  return sum;
}

function litery(value){
  var out = new Array();
  out = value.split("");
  var sum = 0;
  for (var i=0; i<out.length; i++){
      if (isNaN(Number(out[i]))){
        sum++;
      }
  }
  return sum;
}

function suma(value){
  var out = parseInt(value);
  if (isNaN(out))
    return 0;
  return out;
}

function print_things(){
    var cyfr = 0;
    var liter = 0;
    var sum = 0;
    var value;
    while (true){
      value = prompt("podaj napis");
      if (value == null) break;
      cyfr = cyfry(value);
      liter = litery(value);
      sum += suma(value);
      var added_text = cyfr +"\t" + liter + "\t" + sum + "\t" + "<br>";
      document.getElementById("printuje").innerHTML += added_text;
    }
}
