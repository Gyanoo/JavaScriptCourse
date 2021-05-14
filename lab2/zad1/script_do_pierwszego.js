function print_input(){
    var input_val = document.getElementById("example_input").value;
    document.getElementById("printnij").innerHTML = input_val + "  " + typeof(input_val);
}

function check_type(){
    var temp = window.prompt("podaj coś")
    console.log(typeof(temp));
}