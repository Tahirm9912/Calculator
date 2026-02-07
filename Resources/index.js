const display = document.getElementById("display_text");
const operatorDisplay=document.getElementById("display_operator");
var digits = [];
var operables = [];
var firstText =  true;
var newEntry;
var resultDisplayed = false;


function displayEntry(n){
    if(resultDisplayed){
        display.innerHTML = n;
        resultDisplayed = false;
        firstText = false;
        return;
    }
    
    if (firstText){
        display.innerHTML = n;
        firstText = false; 
    } else {
        display.innerHTML = (display.innerHTML*10)+n;  
    } 
}



function calculateFunction(i,j,k){
    if (k == "+") return i + j;
    if (k == "-") return i - j;
    if (k == "*") return i * j;
    if (k == "/") return j === 0 ? "Error" : i / j;
    if (k == "%") return i / 100;
    if (k == "^") return Math.pow(i,j);
    if (k == "sin") return Math.sin(i * Math.PI / 180);
    if (k == "cos") return Math.cos(i * Math.PI / 180);
    if (k == "tan") return Math.tan(i * Math.PI / 180);

}

function showOperator(n){
    if (n == "*") return "×";
    if (n == "/") return "÷";
    if (n == "^") return "^";
    return n;
}



function operatorClicked(n){
    if (display.innerHTML === "" && n!== "="){
        return;
    }
    newEntry = Number(display.innerHTML);
    digits.push(newEntry);
    operables.push(n);
    operatorDisplay.innerHTML = showOperator(n);
    
    display.innerHTML = "";
    if (n == "="){
        if(digits.length == 0){
        display.innerHTML = "";
    } else if (digits.length == 1){
        display.innerHTML = digits[0].value;
    } else {
        display.innerHTML = calculateFunction(digits[digits.length-2], digits[digits.length-1], operables[operables.length-1])
    }
    };  
    if(digits.length == 0){
        display.innerHTML = "";
    } else if (digits.length == 1){
        display.innerHTML = digits[digits.length-1];
    } else {
        display.innerHTML = calculateFunction(digits[digits.length-2],digits[digits.length-1],operables[operables.length-2]);
    }
        
    firstText = true;



    
}

function backSpaceEntered(){
    display.innerHTML = Math.floor(Number(display.innerHTML)/10);
}

function animateFunction(n){
    var m =1;
}



function RegisteringValues(event){
    //OPperators
    
    if (event == "+" || event == "-" || event == "*" || event == "/" || event == "%" || event == "^" || event == "sin" || event == "cos" || event == "tan" || event == "Enter" || event == "="){
        operatorClicked(event)
        animateFunction(event)
        console.log(event)
    };

    //numbers - Entry
    if(event == 1 || event == 2 || event == 3 || event == 4 || event == 5 || event == 6 || event == 7 || event == 8 || event == 9 || event == 0){
        displayEntry(Number(event))
    };

    // times 100 or 1000
    if(event == "double"){
        displayEntry(0);
        displayEntry(0);
    };
    if(event == "tripple"){
        displayEntry(0);
        displayEntry(0);
        displayEntry(0);
    };

    // Clear Operator
    if(event == "Clear"){
        operables = [];
        digits = [];
        display.innerHTML = "";
        operatorDisplay.innerHTML = "";
        firstText = true;
       
    };

    if(event == "."){
        console.log(".")
    }


    //BackSpace
    if(event == "Backspace"){
        backSpaceEntered();
    } 

}













//Event Listeners



document.addEventListener("keydown", (event)=>{
   RegisteringValues(event.key) 

    
})




for (let i = 0; i < 10; i++) {
  const currentBtn = "btn" + i;

  document.getElementsByClassName(currentBtn)[0].addEventListener("click", function () {
    
    RegisteringValues(i);
  });

}

document.getElementsByClassName("btnBack")[0].addEventListener("click", ()=>{
    RegisteringValues("Backspace");
})

document.getElementsByClassName("btnCls")[0].addEventListener("click", ()=>{
    RegisteringValues("Clear");
})

document.getElementsByClassName("btn2zero")[0].addEventListener("click", function () {
    RegisteringValues("double");
});

document.getElementsByClassName("btn3zero")[0].addEventListener("click", function () {
    RegisteringValues("tripple");
});

document.getElementsByClassName("btnplus")[0].addEventListener("click", ()=>{
    RegisteringValues("+");
});
document.getElementsByClassName("btnminus")[0].addEventListener("click", ()=>{
    RegisteringValues("-");
    
});
document.getElementsByClassName("btndiv")[0].addEventListener("click", ()=>{
    RegisteringValues("/");
    
});
document.getElementsByClassName("btnmul")[0].addEventListener("click", ()=>{
    RegisteringValues("*");
    
});
document.getElementsByClassName("btnper")[0].addEventListener("click", ()=>{
    RegisteringValues("%");
    
});
document.getElementsByClassName("btnpow")[0].addEventListener("click", ()=>{
    RegisteringValues("^");
    
});
document.getElementsByClassName("btnsin")[0].addEventListener("click", ()=>{
    RegisteringValues("sin");
    
});
document.getElementsByClassName("btncos")[0].addEventListener("click", ()=>{
    RegisteringValues("cos");
});
document.getElementsByClassName("btntan")[0].addEventListener("click", ()=>{
    RegisteringValues("tan");
});
document.getElementsByClassName("btnequal")[0].addEventListener("click", ()=>{
    RegisteringValues("=");

});
document.getElementsByClassName("btndot")[0].addEventListener("click", ()=>{
    RegisteringValues(".");
    
});
