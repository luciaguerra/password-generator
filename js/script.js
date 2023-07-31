const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.getElementById("password-one");
passwordTwo = document.getElementById("password-two");
showPassword = document.getElementById("generate-password")
pwOne = " ";
pwTwo = " ";
passwordLength = 12;

function generatePasswordOne(){
    for (let i = 0; i <= passwordLength; i++) {
        let randomIndexOne = Math.floor(Math.random() * characters.length);
        pwOne += characters[randomIndexOne];
    }
    return pwOne;
}

function generatePasswordTwo(){
    for (let i = 0; i <= passwordLength; i++) {
        let randomIndexTwo = Math.floor(Math.random() * characters.length);
        pwTwo += characters[randomIndexTwo];
    }
    return pwTwo;
}

showPassword.addEventListener("click", function(){
    passwordOne.textContent = generatePasswordOne();
    passwordTwo.textContent = generatePasswordTwo();

    pwOne = " ";
    pwTwo = " ";
})