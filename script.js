const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
let prevOperand = previousOperandTextElement.innerText;
let currentOperand = currentOperandTextElement.innerText;
let operation;
const deleteBtn = document.querySelector("[data-delete]");
const resultBtn = document.querySelector("[data-equals]");
const resetBtn = document.querySelector("[data-all-clear]");
const operands = document.querySelectorAll("[data-number]");
const operatorBtn = document.querySelectorAll("[data-operation]");
    function clear() {
        prevOperand = "";
        currentOperand = "";
        operation = undefined;
    }
  
    function deletepro() {
      currentOperand = currentOperand.toString().slice(0, -1)
    }
  
    function appendNumber(number) {
      if (number === '.' && currentOperand.includes('.')) return
      currentOperand = currentOperand.toString() + number.toString()
    }
  
    function chooseOperation(operate) {
            if (currentOperandTextElement === "") return;
            if (previousOperandTextElement !== "") {
                compute();
            }
            operation = operate;
            prevOperand = currentOperand;
            currentOperand = "";
        }
      function compute() {
        let result;
        let prev = parseFloat(prevOperand);
        let current = parseFloat(currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (operation) {
            case "+":
                result = prev + current;
                break;
    
            case "-":
                result = prev - current
                break;
    
            case "×":
                result = prev * current;
                break;
            case "x":
                result = prev * current;
                break;
            case "/":
                result = prev / current;
                break;
    
            default:
                return;
        }
        currentOperand = result;
        operation = undefined;
        prevOperand = "";
        previousOperandTextElement.innerText = "";
    }
    function getDisplayNumber() {
        currentOperandTextElement.innerText = currentOperand.toLocaleString("en");
        if (operation !== undefined) {
            previousOperandTextElement.innerText = `${prevOperand} ${operation.toString("en")}`;
        } else {
            previousOperandTextElement.innerText = prevOperand;
        }
    }
    resetBtn.addEventListener("click", () => {
        clear();
        getDisplayNumber();
    });
    deleteBtn.addEventListener("click", () => {
        deletepro();
        getDisplayNumber();
    });
    operands.forEach(operand => {
        operand.addEventListener("click", () => {
            appendNumber(operand.innerText);
            getDisplayNumber();
        });
    });
    operatorBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            chooseOperation(btn.innerText);
            getDisplayNumber();
        })
    })
    resultBtn.addEventListener("click", () => {
        compute();
        getDisplayNumber();
    });
    window.addEventListener("keydown", (e) => {
        e.preventDefault()
        if (
            e.key === "0" ||
            e.key === "1" ||
            e.key === "2" ||
            e.key === "3" ||
            e.key === "4" ||
            e.key === "5" ||
            e.key === "6" ||
            e.key === "7" ||
            e.key === "8" ||
            e.key === "9" ||
            e.key === "."
        ) {
            appendNumber(e.key);
            getDisplayNumber();
        } else if (
            e.key === "96" ||
            e.key === "97" ||
            e.key === "98" ||
            e.key === "99" ||
            e.key === "100" ||
            e.key === "101" ||
            e.key === "102" ||
            e.key === "103" ||
            e.key === "104" ||
            e.key === "105" ||
            e.key === "110"
        ) {
            appendNumber(e.key);
            getDisplayNumber();
        }
        else if (e.key === "+" || e.key === "-" || e.key === "/") {
            chooseOperation(e.key);
            getDisplayNumber();
        }
        else if (e.key === "*") {
            chooseOperation(e.key);
            getDisplayNumber();
        }
        else if (e.key == "Enter" || e.key === "=") {
            chooseOperation(e.key);
            console.log(e.key)
            getDisplayNumber();
        }
        else if (e.key == "Backspace") {
            deletepro(e.key);
            getDisplayNumber();
        }
        else if (e.key == "Delete" || e.key === "46") {
            clear();
            getDisplayNumber();
        }
    });
/* theme */
const butcheck = document.getElementById('calculator_themes');
const selectedTheme = localStorage.getItem('theme');
const toggleBtn = document.querySelectorAll("input");
toggleBtn.forEach(btn => {
	btn.addEventListener("click", () => {
		changeTheme(btn.value);
	});
})
function changeTheme(i){
    if(i == 0){
        document.body.classList.remove('light', 'purple');
        document.body.classList.add('default');
        localStorage.setItem("theme", "default");

    }
    else if(i == 1){
        document.body.classList.remove('default', 'purple');
        document.body.classList.add('light');
        localStorage.setItem("theme", "light");

    }
    else if(i == 2){
        document.body.classList.remove('light', 'default');
        document.body.classList.add('purple');
        localStorage.setItem("theme", "purple");

    }
};
if (selectedTheme === 'default') {
	document.body.classList.add('default')
	toggleBtn[0].checked = true
} else if (selectedTheme === 'light') {
	document.body.classList.add('light')
	toggleBtn[1].checked = 'true'
} else if (selectedTheme === 'purple') {
	document.body.classList.add('purple')
	toggleBtn[2].checked = 'true'
}












