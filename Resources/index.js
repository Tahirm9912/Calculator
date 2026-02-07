const display = document.getElementById("display_text");
var calculations = [];
var firstText =  true;
var currentValue;
var displayValue;





function displayEntry(n){
    if (firstText){
        display.innerHTML = n
        firstText = false
    } else {
        display.innerHTML = (display.innerHTML*10)+n;
        
    }
    displayValue = Number(display.innerHTML);
    
}

function radian(n){
    return (n*Math.PI)/180;
}

function calculateFunction(i,j,k){
    if (k == "+"){
        return i + j;
    } else if ( k == "-"){
        return i-j;
    } else if(k == "*"){
        return i*j;
    } else if(k == "/"){
        return i/j;
    } else if(k == "%"){
        return (i*100)/j;
    } else if(k == "^"){
        return Math.pow(i,j);
    } else if(k == "sin"){
        return Math.sin((i*Math.PI)/180);
    } else if(k == "cos"){
        return Math.cos((i*Math.PI)/180);
    } else if (k == "tan"){
        return Math.tan((i*Math.PI)/180);
    }
}

function showOperator(k){
    if (k == "+"){
        return "+";
    } else if ( k == "-"){
        return "-";
    } else if(k == "*"){
        return "×";
    } else if(k == "/"){
        return "÷";
    } else if(k == "%"){
        return "%";
    } else if(k == "^"){
        return "x<sup>y</sup>";
    } else if(k == "sin"){
        return "sin";
    } else if(k == "cos"){
        return "cos";
    } else if (k == "tan"){
        return "tan";
    }
}


function operatorClicked(n){
    document.getElementById("display_operator").innerHTML = showOperator(n);
    calculations.push({
        value: Number(display.innerHTML),
        operator: n,
    });
    display.innerHTML="";
    if(calculations.length > 1){
        var newValue = calculateFunction(calculations[calculations.length-2].value,calculations[calculations.length-1].value,n);
        console.log(newValue)
        display.innerHTML= newValue;
        calculateFunction(n);
    }
    firstText = true;
    console.log(calculations)
}

function SpecialClicked(n){
    alert(n);
}

function animateFunction(n){
    var m =1;
}



function RegisteringValues(event){
    if (event == "+" || event == "-" || event == "*" || event == "/" || event == "%" || event == "^" || event == "sin" || event == "cos" || event == "tan"){
        operatorClicked(event)
        animateFunction(event)
        console.log(event)
    };
    if(event == 1 || event == 2 || event == 3 || event == 4 || event == 5 || event == 6 || event == 7 || event == 8 || event == 9 || event == 0){
        displayEntry(Number(event))
    };
    if(event == "double"){
        displayEntry(0);
        displayEntry(0);
    };
    if(event == "tripple"){
        displayEntry(0);
        displayEntry(0);
        displayEntry(0);
    };
    if(event == "BackSpace" || event == "Clear" || event == "Enter" || event == "."){
        SpecialClicked();
    };

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
