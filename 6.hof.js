const fruits = ['🍌', '🍓', '🍇', '🍓'];
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}
//배열을 빙글 빙글 돌면서 원하는것을 할때.

 fruits.forEach((value, index, array) => {
    console.log(`------------`)
    console.log(value);
    /*
        🍌
        0
        [ '🍌', '🍓', '🍇', '🍓' ]
    */
    console.log(index);
    console.log(array);
 });
 fruits.forEach((value) =>  console.log(value));

 // 조건에 맞는(콜백함수) 아이템을 찾을때

 /*
    find: 제일 먼저 조건에 맞는 아이템을 반환
 */

 const item1 = { name: '🥛', price: 2 };
 const item2 = { name: '🍪', price: 3 };
 const item3 = { name: '🍙', price: 1 };

const products = [item1, item2, item3, item2];
let found = products.find((value) => value.name === '🍪'); //값을 바로 리턴하는 경우는 return 쓰는 대신 한줄로 깔끔하게 쓸수있다.
    //find는 콜백함수를 전달 받을수있음|벨류를 전달받아서 전달받은 요소를 인자로 전달. || .find에 콜백함수를 전달하면 찾고자 하는 조건이 맞으면 해당하는 아이템을 바로 반환해주는 아이다.
console.log(found)//{ name: '🍪', price: 3 }

 /*
    findIndex: 제일 먼저 조건에 맞는 인텍스를 반환
 */
found = products.findIndex((value) => value.name === '🍙'); 
console.log(found)//2

/*
    some: 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
*/
result = products.some((item) => item.name === '🍪');
console.log(result)//true

/*
    every: 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
*/
result = products.every((item) => item.name === '🍪');
console.log(result)//false

/* 
    filter : 조건에 맞는 모든 아이템들을 새로운 배열로 !
*/
result = products.filter((item) => item.name === '🍪');
console.log(result)//[ { name: '🍪', price: 3 }, { name: '🍪', price: 3 } ]


console.clear();

//Map 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성 !

const nums = [1, 2, 3, 4, 5];

result = nums.map((item) => item * 2);//단순 리턴
console.log(result)//[ 2, 4, 6, 8, 10 ]
result = nums.map((item) => {
    if(item % 2 === 0 ){//짝수일때만 2배 하고싶을때 조건
        return item * 2
    }else {
        return item;
    }
});
console.log(result)//[ 1, 4, 3, 8, 5 ]


/* 
    Flatmap : 배열에서 중첩된 배열이 있을때 펴주던 메소드와 비슷함
    -여러개의 배열을 한개의 배열로 만들어서 받아올수있음 
*/

result = nums.map(item => [1, 2]);
console.log(result);//[ [ 1, 2 ], [ 1, 2 ], [ 1, 2 ], [ 1, 2 ], [ 1, 2 ] ]

result = nums.flatMap(item => [1, 2]);
console.log(result);//[ 1, 2, 1, 2, 1, 2, 1, 2, 1, 2 ]

result = ['dream', 'coding'].map(text => text.split(''));
console.log(result)//[ [ 'd', 'r', 'e', 'a', 'm' ], [ 'c', 'o', 'd', 'i', 'n', 'g' ] ]
result = ['dream', 'coding'].flatMap(text => text.split(''));
console.log(result)//'d', 'r', 'e', 'a', 'm', 'c', 'o', 'd', 'i', 'n', 'g'

/* 
    sort : 배열의 아이템들을 정렬
    - 문자열 형태의 오름차순으로 요소를 정렬하고, ★기존의 배열을 변경)

*/

const texts = ['hi', 'abc'];

texts.sort();
console.log(texts);//[ 'abc', 'hi' ]

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers) //[ 0, 1, 10, 2, 4, 5 ] => 숫자가 문자로 변환되서 정렬된다.

//전달한 콜백함수의 숫자가 <0 a가 앞으로 정렬, 오름차순
//전달한 콜백함수의 숫자가 >0 b가 앞으로 정렬, 내림차순
numbers.sort((a, b) => a - b);
console.log(numbers)//[ 0, 1, 2, 4, 5, 10 ]

/* 
    reduce: 배열의 요소들을 접어서 접어서 값을 하나로!


*/

result = [1,2,3,4,5].reduce((sum, value) => { //sum을 전달받을꺼고 value를 더해줄꺼다
    sum += value;
    return sum;
}, 0);//0은 sum의 초기화값
result = [1,2,3,4,5].reduce((sum, value) => (sum += value), 0);//간략 버전
console.log(result)


