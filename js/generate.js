let generatePass = document.getElementById("generate");
let clearPass = document.getElementById("clearPass");
let copyPass = document.getElementById("copyPass");
let passwordValue = document.getElementById("passwordValue");
var res = "";

generatePass.addEventListener("submit", (e)=>{
    let characters = "";
    let count = 0;

    let password = document.getElementById("lenght");
    let upperCase = document.getElementById("upperCase");
    let lowerCase = document.getElementById("lowerCase");
    let number = document.getElementById("number");
    let character = document.getElementById("character");

    if(upperCase.checked == true){
        characters = characters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if(lowerCase.checked == true){
        characters = characters + "abcdefghijklmnopqrstuvwxyz";
    }
    if(number.checked == true){
        characters = characters + "0123456789";
    }
    if(character.checked == true){
        characters = characters + "!@#$%^&*(){};:,<.>/?\|=+-_`~";
    }
    
    const charactersLength = characters.length;

    while(count < password.value){
        res = res + characters.charAt(Math.floor(Math.random() * charactersLength));
        count = count + 1;
    }

    passwordValue.value = res;
    e.preventDefault();
});

copyPass.addEventListener("submit", ()=>{
    passwordValue.select();
    passwordValue.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(passwordValue.value);
});

clearPass.addEventListener("submit", () => {
    passwordValue.value = null;
});