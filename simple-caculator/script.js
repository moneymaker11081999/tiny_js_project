var input_screen = document.getElementById("input_screen");

function clear(){  
    input_screen.value = "";
}

function calculate(){ 
    try{      
        var temp = input_screen.value;
        input_screen.value = eval(temp);
    }catch(e){
        input_screen.value = "ERROR";
    }
}

function back(){
    if(input_screen.value == "ERROR"){
        input_screen.value = "";
    }else{
        input_screen.value = input_screen.value.substring(0, input_screen.value.length -1);
    }
}

function onClick(){   
    if(input_screen.value == "ERROR"){
        input_screen.value = this.innerText;
    }else{
        input_screen.value += this.innerText;
    }
}

function onload(){
    document.getElementById("0").onclick = onClick
    document.getElementById("1").onclick = onClick
    document.getElementById("2").onclick = onClick
    document.getElementById("3").onclick = onClick
    document.getElementById("4").onclick = onClick
    document.getElementById("5").onclick = onClick
    document.getElementById("6").onclick = onClick
    document.getElementById("7").onclick = onClick
    document.getElementById("8").onclick = onClick
    document.getElementById("9").onclick = onClick
    document.getElementById("(").onclick = onClick
    document.getElementById(")").onclick = onClick
    document.getElementById("plus").onclick = onClick
    document.getElementById("minus").onclick = onClick
    document.getElementById("multiple").onclick = onClick
    document.getElementById("div").onclick = onClick
    document.getElementById("dot").onclick = onClick
    document.getElementById("clear").onclick = clear
    document.getElementById("back").onclick = back
    document.getElementById("result").onclick = calculate
}

window.addEventListener("keydown", onKeyDown);

function onKeyDown(e){
    var board = e.key;
    switch (board) {
        case "0":
            document.getElementById("0").click();
            break;
        case "1":
            document.getElementById("1").click();
            break;
        case "2":
            document.getElementById("2").click();
            break;
        case "3":
            document.getElementById("3").click();
            break;
        case "4":
            document.getElementById("4").click();
            break;
        case "5":
            document.getElementById("5").click();
            break;
        case "6":
            document.getElementById("6").click();
            break;
        case "7":
            document.getElementById("7").click();
            break;
        case "8":
            document.getElementById("8").click();
            break;
        case "9":
            document.getElementById("9").click();
            break;
        case "+":
            document.getElementById("plus").click();
            break;
        case "-":
            document.getElementById("minus").click();
            break;
        case "*":
            document.getElementById("multiple").click();
            break;
        case "/":
            document.getElementById("div").click();
            break;
        case ".":
            document.getElementById("dot").click();
            break;
        case "(":
            document.getElementById("(").click();
            break;
        case ")":
            document.getElementById(")").click();
            break;       
        case "Enter":
            document.getElementById("result").click();
            break;
        case "Backspace":
            document.getElementById("back").click();
            break;
        case "Escape":
            document.getElementById("clear").click();
            break;
    }
}