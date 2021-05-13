/*     class Car{
    constructor(name, year, color){
        this._name = name;
        this._year = year;
        this._color = color;
    }

    changeColor(newColor){
        this._color = newColor;
    }
}
let car = new Car('BMW', 2012, 'red');
car.changeColor('black');
let car1 = new Car('Mersedes', 2021, 'Gradient');
console.log(JSON.stringify(car)); 

 Object.defineProperty(car1,"distance",
{value : 1000, configurable: false, writable: false, enumerable: true });

car1.distance = 321123;
console.log(JSON.stringify(car1));  */


/* class Person{
    constructor(name, year){
        this._name = name;
        this._year = year;

    }

    getInfo(){
        console.log(` ${this._name} ${this._year} `);
    }
}
let per1 = new Person("Владислав", 21);
per1.getInfo(); */
/* 
class Animal{
    constructor(name){
        this._name = name;
    }
    speak(){
        alert(this._name + 'says hi');
    }
}

class Cat extends Animal{
    constructor(name){
        super(name);
    }
    speak(){
        console.log(`${this._name} govorit 'MEOWS'`);
    }
}

let cat = new Cat("dog");
cat.speak();
 */



/* class Person{
    constructor(name, age){
        this._name = name;
        this._age = age;
    }
    speak(){
        console.log(`Меня зовут ${this._name} и мне `);
    }
    eat(){
        console.log("Я НАЕЛСЯ !!!");
    }
}

class Child extends Person{
    constructor(name,age){
        super(name,age);
    }
    speak(){
        console.log(`Меня зовут ${this._name}`);        
    }
    eat(){
        console.log("Я НАЕЛСЯ !!!");
    }
    cry(){
        console.log("УА-УА-УА");
    }
}
let child1 = new Child("Gorge", 1);
child1.cry();
child1.speak(); */

try{
    scrnY();
} catch(error){
    console.log(error);
}

















