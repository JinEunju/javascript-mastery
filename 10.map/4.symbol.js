//Symbol 심벌
//유일한 키를 생성할 수 있음

const map = new Map();
const key1 = 'key';
const key2 = 'key';
map.set(key1, 'hello');
console.log(map.get(key2));//원시 타입이기 때문에 값이 똑같아서 동일한 키로 간주함.
console.log(key1 === key2);//true

const map2 = new Map();
const key3 = Symbol('key');//심볼은 이름은 똑같지만 서로 다른 심볼이 생성된다.
const key4 = Symbol('key');
map2.set(key3, 'hello');
console.log(map2.get(key4)); // undefined
console.log(key3 === key4);//false

// 동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for를 이용한다.
//전역 심벌 레지스트리 (Global Symbol Registry); 

const k1 = Symbol.for('key');// key라는 이름의 심볼을 만들고 존재하지 않는다면 for을 이용해서 새로 만들고
const k2 = Symbol.for('key');//동일한문자열, 동일한 심볼을 생성하고 싶을때.

console.log(k1 === k2)//true

console.log(Symbol.keyFor(k1));//키의 정보를 가지고 올수있지만 전역 레지스트리에 저장된 키만 가지고 올수있다
console.log(Symbol.keyFor(key3));//undefined
//보안을 높이고 싶을때 ! 사용

// 오브젝트에서 심볼 이용
const obj = { [k1]: 'hello', [Symbol('key')] : 1 };//외부에서 접근 하지못하게 하려면 유일한 symbol을 만들어서 키와 값을 지정 !
console.log('==============')
console.log(obj);//{ [Symbol(key)]: 'hello', [Symbol(key)]: 1 } | 
console.log(obj[k1]);//hello
console.log(obj[Symbol('key')]);//undefined 받아올수있음