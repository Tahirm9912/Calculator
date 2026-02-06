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

function calculateFunction(k){
    if (k == "+" || k == "-" || k == "*" || k == "/" || k =="%" || k== "6"){
        console.log(k);
    }
}



function operatorClicked(n){
    calculations.push({
        value: Number(display.innerHTML),
        operator: n,
    });
    display.innerHTML="";
    if(calculations.length > 1){
        display.innerHTML=calculations[0].value;
        calculateFunction(n);
    }
    firstText = true;
}


document.addEventListener("keydown", (event)=>{
    
    
})


document.addEventListener("keydown", (event)=>{
    if (event.key == "+" || event.key == "-" || event.key == "*" || event.key == "/" || event.key == "%" || event.key == "^"){
        operatorClicked(event.key)
        
    };
    if(event.key == 1 || event.key == 2 || event.key == 3 || event.key == 4 || event.key == 5 || event.key == 6 || event.key == 7 || event.key == 8 || event.key == 9 || event.key == 0){
        displayEntry(Number(event.key))
    };
    if(event.key=="Backspace"){
        console.log(event.key)
    }
    if(event.key == "Enter" || event.key == "="){
        console.log(event.key)
    }

    
})






