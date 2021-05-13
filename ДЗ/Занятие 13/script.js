/* let handler = function (callback, e) {
    console.log("Что-то произошло");

    callback(e);
}



const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('test');
    }, 300);
});
newPromise.then((value) => {
    console.log(value);
    // "test"
});





let buttonHandler = function () {
    console.log("Button");
}

let keyboardHandler = function () {
    console.log("input");
}


let check1 = document.getElementById("textArea");
check1.onchange = (e) => handler(keyboardHandler, e);
let check2 = document.getElementById("button");
check2.onclick = (e) => handler(buttonHandler, e); */


let button1 = document.getElementById("button");
button1.onclick = () => loadDoc();


function loadDoc(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET","https://jsonplaceholder.typicode.com/todos/1",false); 
    xhr.send()
    if(/* this.readystate==4&& this.status==200 */ true){
        document.getElementById("example").innerHTML=xhr.responseText;
    }

   
}







































