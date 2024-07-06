const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let password_out1 = document.getElementById("password_1");
let password_out2 = document.getElementById("password_2");
let password_1 = "";
let password_2 = "";

function animation() {
    let i = 0;

    function generateWithDelay() {
        if (i < 10) {
            generate();
            i++;
            setTimeout(generateWithDelay, 50);
        }
    }

    generateWithDelay();
}

function generate() {
    password_1 = "";
    password_2 = "";
    for (let i = 0; i < 15; i++) {
        let char_1 = characters[Math.floor(Math.random() * characters.length)];
        let char_2 = characters[Math.floor(Math.random() * characters.length)];
        password_1 += char_1;
        password_2 += char_2;
    }
    password_out1.textContent = password_1;
    password_out2.textContent = password_2;
}
