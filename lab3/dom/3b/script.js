class mySpan extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    get val() {
        return this.getAttribute("val");
    }

    set val(new_value) {
        this.setAttribute("val", new_value);
    }

    static get observedAttributes() {
        return ["val"];
    }

    attributeChangedCallback(attribute) {
        if (attribute === 'val')
            this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadow.innerHTML = `${this.val}`;
    }
}
customElements.define('my-span', mySpan);
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
    let allSpans = document.getElementsByTagName("my-span");
    intervalRunning = window.setInterval(function() {
        for(var i=0;i<allSpans.length;i++){
            allSpans[i].setAttribute("val", counter);// = counter;
        }
        counter = Math.max(0, counter-1);
    }, 1000);
}