/* function* generateSequence() {
    let first = 0;
    let second = 1;
   
    yield(second);
    while(1){
        yield(second);
        [first,second] = [second, first+second];
        
    }

  }

let generator = generateSequence();
for (let i = 1; i <= 10; i++){
let first = generator.next();
console.log(JSON.stringify(first));
} */

/* function* generateSequence(start, end) {
  for (let i = start; i <= end; i++){
    if(i % 2 == 0){
      yield i;
    }
  } 
}
let generator = generateSequence(7, 100);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value); */

/* let h1 = {
  name: "Pes",
  age: 22
}

let h2 = {
  name: "Psina"
}
h2.__proto__ = h1;
console.log(h1);
console.log(h2);
console.log(h2.name);
console.log(h2.age); */

let dogger = {
  klichka : "Pupsik",
  say : function(){
    console.log(this.klichka);
  }
}
console.log(JSON.stringify(dogger))
console.log(dogger);



