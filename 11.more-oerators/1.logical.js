// 논리 연산자 Logical Operrator
// && 그리고
// || 또는 
// 단축평가: short-circuit evaluation

const obj1 = { name: '🐶' }
const obj2 = { name: '😸', owner: 'Ellie' };

if(obj1 && obj2) { //불리언은 값이 있으면 true 이다.
    console.log('둘다 true!');
}

let result = obj1 && obj2;//리절트는 obj1이 트루면 obj2가 할당
console.log(result);//리절트를 평가해야한다면 조건문 안에 넣어야 한다. => true | 그냥 변수에 할당한다면 object자체가 들어간다  => { name: '😸', owner: 'Ellie' }

result = obj1 || obj2; //앞에꺼가 true니까 뒤에껀 검사안해보고 바로 앞에껄 출력한다. =>단축평가

console.log(result);

// 활용예
//&& 조건이 truthy일때 &&, 무언가를 해야 할 경우
//|| 조건이 falshy일때 || , 무언가를 해야 할 경우

function changeOwner(animal){
    if(!animal.owner){
        throw new Error("주인이 없어")
    }
    animal.owner = '바뀐주인!';
}
function makeNewOwner(animal){
    if(animal.owner){
        throw new Error("주인이 있어")
    }
    animal.owner = '새로운주인!';
}

obj1.owner && changeOwner(obj1); //주인이 있으면 changeOwner호출 |  { name: '🐶' } // 
obj2.owner && changeOwner(obj2);
console.log(`obj1: ${obj1}`);
console.log(`obj2: ${obj2}`);
console.log(obj1);//{ name: '🐶' }
console.log(obj2);//{ name: '😸', owner: '바뀐주인!' }

console.log(`=====================`);
obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1);//{ name: '🐶', owner: '새로운주인!' } //강아지는 주인이 없었기때문에 false , 2번쨰껄 실행
console.log(obj2);//{ name: '😸', owner: '바뀐주인!' }//고양이는 주인이 있기때문에 true, true인 1번째꺼 실행

//단축평가를 사용하지않으면 코드를 길게 작성해야한다. 엔드 연산자를 이용하면 좀 더 심플하게 이용할수 있다.

//null 또는 undefined인 경우를 확인할때
let item;// = { price: 1 };
//const price = item.price;//null인 아이템에 접근하게되면 어플리케이션이 죽는다
const price = item && item.price;//그래서 item이 있다면 item에 있는 price에 접근한다. //없다면 undifined
console.log(price);

//기본값을 설정
function print(message) {
    const text = message || 'Hello';
    console.log(text);//Hello
}
print();//Hello
print(undefined);//Hello
print(null);//Hello
print(0);//Hello
//defalut 파라미터는 전달하지 않거나 undifind에서만 설정이 된다.


//이전 강의 defalut 파라미터 예시
function printBefore(message = 'Hi') {
    console.log(message);//Hi
}
printBefore();//Hi
printBefore(undefined);//Hi
printBefore(null);//null
printBefore(0);//0




//||연산자는 : 값이 falshy한 경우 설정(할당) (예): 0, -0, null, undefined, ''
