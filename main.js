

const keys = document.querySelector(".calculator-keys");
const calculator = document.querySelector(".calculator");
const display = document.querySelector(".calculator-display");


///learn to use arrow functions
// keys.addEventListener("click",function(e) {
    
// })

const calculate = (a, operator ,b) => {
    let result = "";
    if (operator === "add"){
        result = parseFloat(a) + parseFloat(b);
    } else if (operator === "subtract"){
         result = parseFloat(a) - parseFloat(b);
    } else if (operator === "multiply"){
         result = parseFloat(a) * parseFloat(b);
    } else if (operator === "divide") {
        result = parseFloat(a) / parseFloat(b);
    }
    return result;
}


keys.addEventListener("click", e => {
    if (e.target.matches('button')) {

        const key = e.target; //key to be clicked
        const action = key.dataset.action; //dataset is how you access action(ie data-action attribute)
        const currentDisplay = key.textContent; //store the text-content of the clicked-key in this variable 
        const displayedContent = display.textContent;  //display the above
       
        // Array.from(key.parentNode.children)
        //     .forEach(p => p.classList.remove("is-pressed"))


        const previousKey = calculator.dataset.previousKeyType; 

        if (!action) { //if clicked isnt an action (ie no "data-action")
            console.log("number-key" || "operator"); 
            if(displayedContent === "0" || previousKey === 'operator')
                {display.textContent = currentDisplay;
            }
            else {
                display.textContent = displayedContent + currentDisplay;
            }
        }

        //reading the values of data-action=""
        if (action === "add" || 
            action === "multiply" || 
            action === "divide" || 
            action === "subtract") {
            console.log("operator-key");
            // key.classList.add("is-pressed")

            calculator.dataset.previousKeyType = "operator";
            calculator.dataset.firstValue = displayedContent;
            calculator.dataset.operator = action;
        }

        if (action === "clear") {
            console.log("clear");
        }

        if (action === "decimal") {
            console.log("dec");
            display.textContent = displayedContent + ".";
        }

        if (action === "calculate") {
            console.log("equal-key");
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedContent;

            display.textContent = calculate(firstValue, operator, secondValue) // calling the calculate function
        }
    }
});