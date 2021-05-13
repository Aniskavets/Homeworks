/* let arr = ['Tony', 'Stark',1,45,2,5,34,9,11];
let [name1,sureName,...others] = arr;
let i = 0;
let sum = 0;

for(i; i < others.length; i++){
    sum += others[i];
}

others.forEach(function(item){
    sum += item;
})
console.log(name1);
console.log(sureName);
console.log(sum); */

 function User(name, surname,age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
   }
 
   let user1 = new User("Matvey","Kyrator",26);
   let user2 = new User("Ihor","Student",22);
   let user3 = new User("Nemeckiy","Nemec");

   console.log(user1, user2, user3);
   
   console.log(typeof JSON.stringify(user1));
   console.log(typeof JSON.parse(JSON.stringify(user1)));

  /*  console.log((Date.now()-Date.parse("1999-09-27T08:45"))/1000/3600/24); */

   
  
