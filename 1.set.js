/*
* 전 강의 복습

배열을 특징 !!

* 인덱스를 기반으로 해서 필요한 데이터를 저장할수있다
* 객체들도 저장할수있었다
*인덱스 => 순서가 중요
* 키?에 관련된것도 쉽게 저장할수있다.
* 배열은 중복이 가능하다

*/
//Set은 데이터의 집합체 | 인덱스 없음 | 순서 없음 | 하나의 집합체 | 중복안됨

const set = new Set([1, 2, 3]);


console.log(set);

//사이즈 확인
console.log(set.size);//3

//존재하는지 확인
console.log(set.has(2));//true
console.log(set.has(6));//false

//순회
set.forEach(item => console.log(item)); //고차함수처럼 아이템을 받아서 하나씩 출력하는것도 할수있다
for(const value of set.values()) { //set도 이터러블
    console.log(value)
}

//추가
set.add(6)
console.log(set);//Set(4) { 1, 2, 3, 6 }
set.add(6);
console.log(set)//set 은 중복이 안됨으로 변화X

//삭제
set.delete(6);
console.log(set)// Set(3) { 1, 2, 3 }

//전부 삭제
set.clear(6);
console.log(set)// Set(0) {}

//객체 이용해서 set을 만들수도 있다
//오브젝트 세트

const obj1 = { name: '🍎', price: 8 };
const obj2 = { name: '🍌', price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs);//Set(2) { { name: '🍎', price: 8 }, { name: '🍌', price: 5 } }




//퀴즈
obj1.price = 10;
objs.add(obj1);
console.log(objs)//Set(2) { { name: '🍎', price: 10 }, { name: '🍌', price: 5 } } =>오브젝트는 쉘리카피가 된다 => 오브젝트의 주소를 복사하기때문에 오브젝트 내부를 변경하면 카피가 아니라 변경이 된다.

//퀴즈

const obj3 = { name: '🍌', price: 5 };
objs.add(obj3);
console.log(objs)
/* 추가된 오브젝트는 힙에 새롭게 만들어주고 메모리의 참조 주소가 다르다.
Set(3) {
    { name: '🍎', price: 10 },
    { name: '🍌', price: 5 },
    { name: '🍌', price: 5 }
  }
*/
obj3.price = 8;
console.log(objs)




