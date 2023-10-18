//Nullish Coalescing Operator
//ES11 (ECMAScript 2020)
// ??
// ?? null과 undefined인 경우만 하고 싶을때 사용할수있다
//|| falshy한 경우 설정(할당) : 0, -0, ''

let num = 0; 
console.log(num || '-1');//-1 => num이 없을때만 -1나오게 하고싶은데 0이라는 숫자가 있는데 -1이 나옴..==> OR연산자를 쓰면 잘못된 문자열을 출력할수있어서 유의해야함
console.log(num ?? '-1');//그럴때 num이라는 값이 없을때만 -1이 나오게 하고싶을때 ?? 를 사용한다.