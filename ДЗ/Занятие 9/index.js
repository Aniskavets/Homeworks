/*
let human = {
    name: "Vlad",
    age: "21",
    sayIntro() {
        console.log("Name :" + this.age + " Age :" + this.age)
    }
}

human.sayIntro();

for (field in human) {
    console.log(field);
}

for (field in human) {
    console.log(human[field]);
}

console.log(Object.keys(human));

console.log(Object.getOwnPropertyNames(human));
*/
/*
let car = {
    name: "Volvo",
    age: "5",
    probeg: "100000km"
}
for (field in car) {
    console.log(`${field} :  ${car[field]};`); 
}

for (field in car) {
    console.group();
    console.log(field);     
    console.log(car[field]);
}
*/
/*
let newUser = {};
let user = {
    name: "Volvo",
    email: "qwe@mail.ru",
    phone: "+375291111111",
    id: "1"
}
console.log(Object.assign(newUser, user));
*/
/*
let circle = {
    radius: "7",
    color: "Green",
    calculateCircumference(){
        console.log(2 * Math.PI * this.radius)
    }
}
circle.calculateCircumference();
*/
/*
ЗАДАЧА НОМЕР 4
let message = {
    text: "",
    getMessage(){
        text = prompt("Введите сообщение");
    },
    showMessage(text){
        console.log(text)
    }
}
message.getMessage();
message.showMessage(this.text)
*/
/*
ЗАДАЧА НОМЕР 5
let rectangle = {
    height : "20",
    width : "35",
    getArea(){
        console.log(this.height * this.width)
    }
}
rectangle.getArea();
*/



let obj = {};
console.log(obj.keys);

let isEmpty = function(obj){
    console.log(obj.keys);
    if(obj.keys === undefined){
        console.log("false");
    }else{
        console.log("true");
    }
}

isEmpty(obj);

/*
let selfGeneratedUser = {
    name : "",
    email : "",
    phone : "",
    getInfo(){
        this.name = prompt("Введите имя :");
        this.email = prompt("Введите емейл :");
        this.phone = prompt("Введите номер телефона :");
    },
    introduce(){
        console.log(`Имя : ${this.name}; Емейл : ${this.email}; Номер телефона : ${this.phone};`)
    }
}
selfGeneratedUser.getInfo();
selfGeneratedUser.introduce();
*/