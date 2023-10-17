const fruits = ['🍌', '🍎', '🍇', '🍑']

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i] + '>_<');
}

//추가, 삭제 좋지않은 방법 
fruits[4] = '🍓'
console.log(fruits);
fruits[fruits.length] = '🍓'//정 추가해야하면 배열의 마지막에 추가
console.log(fruits);

delete fruits[0];
console.log(fruits)
