let display = document.querySelector(".display");
let button = document.querySelectorAll("button");
button.forEach((btn) =>{
    btn.addEventListener("click",()=>{
        let btnID = btn.getAttribute("id");
        if (btnID==="clear") {
            display.value=" ";
        }else if(btnID==="delete"){
            display.value = display.value.slice(0, -1);
        }else if(btnID==="result"){
            display.value = eval(display.value); 
        }else{ 
            display.value = display.value + btnID;
        }
    })
})