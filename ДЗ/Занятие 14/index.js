/* let button1 = document.getElementById("button");
button1.onclick = () => loadDoc();


function loadDoc() {
    let headers;
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response =>{ 
            headers = [response.headers.get('')];
            return response.json()})
        .then(function (commits) {           
            let form = document.createElement("form");
            for (let key in commits) {

                let label = document.createElement("label");
                label.innerText = key;
                form.appendChild(label);

                let input = document.createElement("input");
                input.value = commits[key];
                form.appendChild(input);

                form.classList.add("form");
                input.classList.add("inputick");

            }
            document.body.appendChild(form);


            
        });
} */

/*  window.localStorage.setItem("password", "123"); */
/*  console.log(localStorage.getItem("password")); */


let input = document.createElement("input");
document.body.appendChild(input);
let button = document.createElement("button");
button.innerText = "Кнопка";


document.body.appendChild(button);

document.body.appendChild(input);


button.onclick = () => {
    window.localStorage.setItem("text1", input.value);
    alert("Добро пожаловать !!!");
}

console.log(localStorage.getItem("text1"));
