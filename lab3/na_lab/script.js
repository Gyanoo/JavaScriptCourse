// var game = document.getElementsByTagName("div");
var score = 0;
var interval;
var scoreView = document.getElementById("score");
var defaultText = "jestem se akapit Pit";
var paragraphCount = 0;
var interval;
function add(){
    if(paragraphCount == 5){
        clearInterval(interval);
        window.alert("end of game");
        location.reload();
        return;
    }
    var board = document.getElementById("game").children;
    var rand = Math.floor(Math.random() * 2);
    var place = Math.floor(Math.random() * board.length);
    if(rand == 0){
        paragraph = makeParagraph();
        var randomRow = board.item(place);
        board.item(place).parentNode.insertBefore(paragraph,randomRow);
    }
    else{
        var headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
        var headerToSwap = headers.item(Math.floor(Math.random() * headers.length));
        var newHeader = makeHeader();
        board.item(place).parentNode.replaceChild(newHeader, headerToSwap);
    }
}

function makeHeader(){
    var rand = Math.floor(Math.random() * 6 + 1);
    var header = document.createElement("h"+rand);
    var text = document.createTextNode("Nagłówek poziomu "+rand);
    header.appendChild(text);
    header.addEventListener("click", function(){
        changeScore(rand);
    });
    return header;
}

function makeParagraph(){
    var paragraph = document.createElement("p");
    paragraphCount++;
    var text = document.createTextNode(defaultText);
    paragraph.appendChild(text);
    paragraph.addEventListener("click", function(){
        paragraph.parentNode.removeChild(paragraph);
        changeScore(-1);
        paragraphCount--;
    });
    return paragraph;
}

function changeScore(value){
    score += parseInt(value);
    scoreView.innerHTML = "your actual score: "+ score;
}


function startGame(){
    var headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    for(var i=0;i<headers.length;i++){
        var value = headers.item(i).tagName.substring(1);
        if (value == 6){
            headers.item(i).addEventListener("click", function(){
                changeScore(6);
            });
        }
        else if (value == 5){
            headers.item(i).addEventListener("click", function(){
                changeScore(5);
            });
        }
        else if (value == 4){
            headers.item(i).addEventListener("click", function(){
                changeScore(4);
            });
        }
        else if (value == 3){
            headers.item(i).addEventListener("click", function(){
                changeScore(3);
            });
        }
        else if (value == 2){
            headers.item(i).addEventListener("click", function(){
                changeScore(2);
            });
        }
        else if (value == 1){
            headers.item(i).addEventListener("click", function(){
                changeScore(1);
            });
        }
        else if (value == 0){
            headers.item(i).addEventListener("click", function(){
                changeScore(0);
            });
        }
    }
    interval = (Math.random()+1)*1000;
    interval = setInterval(add, interval);
}