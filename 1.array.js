//배열 생성 방법
let array = new Array(3);//array 라는 클래스로 배열 만들기. 1. 비어있는 배열 만들기
console.log(array);

array = new Array(1, 2, 3);//2. 생성자 함수로 만들고싶은 아이템 전달해서 배열만들기
console.log(array);

 array = Array.of(1, 2, 3); //3. 스테틱 함수로 만들어서 배열 만들기
 console.log(array);

const anotherArray = [1,2,3,4];//4. 배열 리터럴 이용해서 만들기
console.log(anotherArray)

array = Array.from(anotherArray); //5. 기존 배열로부터 새로운 배열 만들고 싶을때, 순회가 가능한 모든것 전달 가능, 문자도 순회가능
console.log(array);

// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야함
// 하지만 자바스크립트에서의 배열은 연속적으로 이어져 있지 않다.
// 오브젝트와 유사함!
// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체다!
// 이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음( Type Collections )

array = Array.from({ //js에서 배열이 오브젝트와 유사하다는 예시
    0: '안',
    1: '녕',
    length: 1,
});
console.log(array)
