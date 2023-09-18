//동등비교연산자


// == 값이 같음
// != 값이 다름
// ===값과 타입 같음
//!==값과 타입다름

let obj1 = {
    name: 'js',
    type: String
}
let obj2 = {
    name: 'js',
    type: String
}

console.log(obj1 === obj2, obj1 == obj2)



//false, false  => 서로 다른 메모리주소를 가지고 있기 ㅉ때문이 false가 나옴
console.log(obj1.name === obj2.name)

let obj3 = obj2;

console.log(obj3 === obj2, obj3 == obj2)
