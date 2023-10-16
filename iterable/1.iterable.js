//Iterable 하다는건! 순회가 가능하다는 거지!
//[Sybol.iterator](): Iterator;
//심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는것은
//순회가능한 객체이다 라는걸 알 수있음
//순회가 가능하면 무엇을 할 수 있나? for..of, spread

const array = [1, 2, 3,4,5,6];
for( const item of array ) {
    console.log(item) // 1,2,3
}

/*
const obj = { 0: 1,1: 2} 객체는 이터러블이 아니다  obj is not iterable
for( const item of obj ) {
    console.log(item)
}
*/

for( const item of array.values() ) {
    console.log(item)// 1,2,3
}
for( const item of array.keys() ) {
    console.log(item)// 1,2,3
}
for( const item of array.entries() ) {
    console.log(item)
    //[ 0, 1 ]
    //[ 1, 2 ]
    //[ 2, 3 ]
}
const obj = { 0: 1,1: 2} //프로토콜 따라가지 않는 일반 객체는 for in을 사용하여 key를 출력할수있다.
for( const item in obj ) {
    console.log(item) //0, 1
}

//수동적 사용
const iterator = array.values();
for( const item of iterator ) {
    console.log(item) // 1,2,3
}

console.log(iterator.next());//{ value: undefined, done: true } 
console.log(iterator.next().value);//{ value: undefined, done: true } 
console.log(iterator.next().done);//true

//위에꺼 지저분해보이니까 while로 빙글빙글 돌면서 할수도 있다.
const array2 = [1, 2, 3];
const iterator2 = array2.values();
while(true) {
    const item = iterator2.next();//next를 받는다.
    if(item.done) break;//item이 done이면 끝나고 아니면 계속 돈다.
    console.log(item);

}