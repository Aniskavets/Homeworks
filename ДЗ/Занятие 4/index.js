/* let size = Number(prompt("Размер массива :"));
let arr =[];


for(let i = 0; i < size; i++){
    arr[i] = Number(prompt(`Введите элемент номер ${i+1}`));
}


for(let j = size; j > 0; j--){
    for(i = 0; i < size; i++){
        if(arr[i] > arr[i + 1]){
            
            arr[i] = arr[i] + arr[i + 1];
            arr[i + 1] = arr[i] - arr[i+1];
            arr[i] = arr[i] - arr[i+1];
        }
    }
    
}


console.log(arr); */

let arr = [];

for (let j = 0; j < 10; j++) {
    let newArr = [];

    for (let i = 0; i < 10; i++) {
        newArr[i] = i + j * 10;
    }
    arr[j] = newArr;
}


console.log(arr);