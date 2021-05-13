"use strict";
const currentPass = "1234qwer";
let pass = prompt("pass:");

function check(pass) {
    if(pass === currentPass){
        console.log("Пароль верный")
    }else if(pass == "") {
        console.log("Отмена")
    }else{
        console.log("Пароль неверный")
    }
check(pass);
}

check(pass);
