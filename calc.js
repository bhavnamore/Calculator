let input = document.getElementById('inputbox');    //Stores inputbox values in input
let buttons = document.querySelectorAll('button');   //Selects all buttons

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);  //Eval() is an inbuild function in js
            input.value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);   //if len is 4 then 4-1=3 i.e. 3 is excluded and 0,1,2 values of array are present
            input.value = string;
        }
        else {
            string = string + e.target.innerHTML;
            input.value = string
        }
    })
})
