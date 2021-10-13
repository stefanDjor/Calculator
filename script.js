let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("numbers"));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'RESET':
                display.innerText = '';
                break;
            case 'DEL':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                if(display.innerText === ''){
                     break;
                }
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error!'
                 }
                 break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});

// theme

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

