let startButton = document.getElementById("submit");
startButton.addEventListener("click", decrease);
var intervalRunning = 0;
function decrease(){
    if (intervalRunning != 0){
        clearInterval(intervalRunning)
    }
    var counter = document.getElementById("counterInput").value;
    console.log(counter);
    if(isNaN(counter) || counter<0 || counter==''){
        counter = 10;
    }
    let form = document.getElementById("spans");
    let allSpans = form.getElementsByTagName("SPAN");
    intervalRunning = window.setInterval(function() {
        for(var i=0;i<allSpans.length;i++){
            let old = allSpans.item(i);
            let span = document.createElement("span");
            let textNode = document.createTextNode(counter);
            span.appendChild(textNode);
            form.replaceChild(span, old);
            allSpans[i].textContent = counter;
        }
        counter = Math.max(0, counter-1);
    }, 1000);
}