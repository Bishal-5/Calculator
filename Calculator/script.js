let display = document.querySelector(".display"); //Access i/p & o/p display
let button = document.querySelectorAll("button"); //Access all buttons
button.forEach((btn) =>{ //Create for each loop with using button
    btn.addEventListener("click",()=>{ //Event handeling
        let btnID = btn.getAttribute("id"); //button's ID collect
        if (btnID==="clear") { //If user press 'AC' button
            display.value=" "; //Clear display value. Blank value
        }else if(btnID==="delete"){ //If user press 'DEL' button
            display.value = display.value.slice(0, -1); //Delete one value on display
        }else if(btnID==="result"){ //If user press '=' button
            display.value = eval(display.value); //Calculate value using 'eval' function
        }else{ //Otherwise take input form user each & every
            display.value = display.value + btnID; //Add button's ID on result display value (each & every)
        }
    })
})