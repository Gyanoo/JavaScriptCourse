function poka(){
    var x = document.getElementById("form").value.split('\n');
    console.log(x);
}

function litery(value){
    var out = new Array();
    out = value.split("");
    var sum = 0;
    for (var i=0; i<out.length; i++){
        if (isNaN(Number(out[i]))){
            sum++;
        }
        else return 0;
    }
    return sum;
}

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

let liczbyMap = new Map();
let slowaMap = new Map();

function print_things(){
    var cyfr = 0;
    var liter = 0;
    var wystapienia;
    var x = document.getElementById("form").value.split('\n');
    var radio = document.getElementById("radio").checked;
    if (!radio){
        for (size = 0; size<x.length;size++){
            cyfr = cyfry(x[size]);
            liter = litery(x[size]);
            if (cyfr == 0 && liter != 0){
                wystapienia = [];
                for(size1 = 0; size<x.length && size1 != size; size1++){
                    if (x[size1] == x[size]){
                        wystapienia.push(size1);
                    }
                }
                if (wystapienia.length != 0)
                    document.getElementById("wynik").innerHTML += wystapienia + "<br>";
            }
            else if(cyfr!=0 && liter == 0){
                wystapienia = 0;
                for(size1 = 0; size<x.length && size1 != size; size1++){
                    if (x[size1] == x[size]){
                        wystapienia++;
                    }
                }
                if (wystapienia != 0)
                    document.getElementById("wynik").innerHTML += wystapienia + "<br>";
            }
            else{
                document.getElementById("wynik").innerHTML += "<br>";
            }
        }
    }
    else if(radio){
        for (size = 0; size<x.length;size++){
            cyfr = cyfry(x[size]);
            liter = litery(x[size]);
            if (cyfr == 0 && liter != 0){
                wystapienia = [];
                if(!slowaMap.has(x[size])){
                    wystapienia.push(size);
                    slowaMap.set(x[size], wystapienia);
                }
                else{
                    wystapienia = slowaMap.get(x[size]);
                    if (wystapienia.length!=0)
                        document.getElementById("wynik").innerHTML += wystapienia + "<br>";
                    wystapienia.push(size);
                    slowaMap.set(x[size], wystapienia);
                }
            }
            else if(cyfr!=0 && liter == 0){
                wystapienia = 0;
                if(!liczbyMap.has(x[size])){
                    liczbyMap.set(x[size], 1);
                }
                else{
                    wystapienia = liczbyMap.get(x[size]);
                    if (wystapienia!=0)
                        document.getElementById("wynik").innerHTML += wystapienia + "<br>";
                    wystapienia++;
                    liczbyMap.set(x[size], wystapienia);
                }
            }
            else{
                document.getElementById("wynik").innerHTML += "<br>";
            }
        }
    }
}