//배열의 함수들
//배열 자체를 변경하는지, 새로운 배열을 반환하는지

const fruits = ['🍌', '🍎', '🍇', '🍑'];

//특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits)) //class 이름을 사용하면 스태틱 함수 
// => 배열전달하면 true
console.log(Array.isArray({})) 
// => 빈배열 전달하면 false

//특정한 아이템의 위치를 찾을때
console.log(fruits.indexOf('🍎'), fruits.indexOf('🥩'), fruits.indexOf('🍳'), fruits.indexOf('🍑')) //1 -1 -1 3

//특정한 아이템이 있는지 체크
console.log(fruits.includes('🍎'), fruits.includes('🥩'), fruits.includes('🍳'), fruits.includes('🍑')) //true false false true

//추가 - 제일 뒤
let length = fruits.push('🥑'); // push, unshift는 배열자체를 수정(업데이트)
console.log(fruits);//[ '🍌', '🍎', '🍇', '🍑', '🥑' ]
console.log(length);//5

//추가 - 제일 앞
length = fruits.unshift('🥐'); //
console.log(fruits) //[ '🥐', '🍌', '🍎', '🍇', '🍑', '🥑' ]
console.log(length); //6

//제거 - 제일 뒤
let lastItem = fruits.pop();//pop api는 배열자체를 수정하고(item을 제거하고) 제거된 item을 리턴해준다.
console.log(fruits);//[ '🥐', '🍌', '🍎', '🍇', '🍑' ]
console.log(lastItem);//🥑

//제거 - 제일 앞
lastItem = fruits.shift(); //
console.log(fruits) //[ '🍌', '🍎', '🍇', '🍑' ]
console.log(lastItem); //🥐

//중간에 추가&삭제
const deleted = fruits.splice(1,1)//시작하는 index, 삭제하고 싶은 count, 삭제하고 추가할 아이템 => 배열자체를 수정하고 업데이트 해준다.
console.log(fruits)//[ '🍌', '🍇', '🍑' ]
console.log(deleted)//[ '🍎' ] 삭제된 아이템이 리턴됨

fruits.splice(1, 0, '🍳')// 1번째부터 시작해서 0개를 삭제하고 배열 추가 => 배열 자체를 수정(업데이트))[ '🍌', '🍳', '🍇', '🍑' ]
fruits.splice(1, 2, '🍹')// 1번째부터 시작해서 2개를 삭제하고 배열 추가 => 배열 자체를 수정(업데이트))[ '🍌', '🍹', '🍑' ]
console.log(fruits);


// 잘라진 새로운 배열을 만드는 api => slice는 기존의 배열은 그대로 유지한 상태로 잘라진 새로운 배열을 리턴한다.
let newArr = fruits.slice(0, 2); //어디서부터 할껀지, 어디까지 할껀지. => 0,1
console.log(`
slice 구간 설정
    newArr: ${newArr}
    fruits: ${fruits}
`)
/**
 * newArr: 🍌,🍹
 * fruits: 🍌,🍹,🍑
 */

newArr = fruits.slice(); //아무것도 지정하지않으면 전체를 반환함
console.log('newArr(): ' + newArr) //newArr(): 🍌,🍹,🍑

newArr = fruits.slice(1);//1부터 리턴함
console.log('newArr1: ' + newArr) //newArr1: 🍹,🍑

newArr = fruits.slice(-1);//뒤에서부터 슬라이스 함
console.log('newArr-1: ' + newArr) //newArr-1: 🍑


// 여러개의 배열을 붙여줌(이어줌)

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(`
arr1: ${arr1}
arr2: ${arr2}
arr3: ${arr3}
`)

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);//[ 6, 5, 4, 3, 2, 1 ]


console.clear()

//중첩 배열을 하나의 배열로 쫙 펴기
let arr = [
    [1, 2, 3],
    [4, [5, 6]],
];
console.log(arr);
console.log(arr.flat());//1단계까지 중첩된걸 풀어준다 => [ 1, 2, 3, 4, [ 5, 6 ] ]
console.log(arr.flat(2));//2단계까지 중첩된걸 풀어준다 => [ 1, 2, 3, 4, 5, 6 ]

//특정한 값으로 배열을 채우기
arr.fill(0);//옵션 : 뭘채울건지, 몇번째부터 몇번째까지 채울건지,
arr.fill('a',1);//[ 0, 'a', 'b', 'b', 'a', 'a' ]
arr.fill('b',2,4);//[ 0, 'a', 'b', 'b', 'a', 'a' ]
console.log(arr)
console.log(arr)

//배열을 문자열로 합하기
let text = arr.join();
console.log(text);//0,a,b,b,a,a
text = arr.join(' | ');
console.log(text);//0 | a | b | b | a | a

//내가 배열 메소드를 사용할때 배열자체를 수정하는건지,  반환된 값으로 새로운 배열을 반환하는지 알아두기 | 인자를 전달할때 어떤 조합으로 사용하는지, 어떤걸 전달하는지 api확인하기.

//배열 함수 끗

