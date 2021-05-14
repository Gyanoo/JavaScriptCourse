let addButton = document.getElementById("toggleAdd");
addButton.addEventListener("click", toggleAdd);

let removeButton = document.getElementById("toggleRemove");
removeButton.addEventListener("click", toggleRemove);

function toggleAdd(){
    var allElements = document.querySelectorAll('*');
    let tags = ['nav', 'main', 'aside', 'footer', 'h1'];
    for(var i=0;i<tags.length;i++){
        document.getElementsByTagName(tags[i])[0].classList.add('ramka', 'azure');
        // allElements[i].className = '';
        // if(classes.length!=0){
        //     for(var j=0;j<classes.length;j++){
        //         allElements[i].classList.remove(classes[j]);
        //     }
        // }
    }
    document.getElementsByTagName('aside')[0].style.float = "right";
}
function toggleRemove(){
    var allElements = document.querySelectorAll('*');
    let tags = ['nav', 'main', 'aside', 'footer', 'h1'];
    for(var i=0;i<tags.length;i++){
        document.getElementsByTagName(tags[i])[0].classList.remove('ramka', 'azure');
        // allElements[i].className = '';
        // if(classes.length!=0){
        //     for(var j=0;j<classes.length;j++){
        //         allElements[i].classList.remove(classes[j]);
        //     }
        // }
    }
    document.getElementsByTagName('aside')[0].style.float = "none";
}