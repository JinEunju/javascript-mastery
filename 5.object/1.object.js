//Object literal {key: value}
//Object literal { key: value }
//new Object(); Object 클래스
//Object.create(); Object 클래스안의 create()gkatn
//key - 문자, 숫자, 문자열, 심볼
//value - 원시값, 객체 (함수)

let apple = {
    name: 'apple',
    'hello-bye': '★',
    0: 1,
    ['hello-bye1']: '하잉',
    hello: history,
};

//속성, 데이터에 접근하기 위해서는 
console.log(apple.name); //1.마침표 표기법
console.log(apple['hello-bye']); //2.대괄호 표기법
console.log(apple['hello']);

//속성 추가
apple.emoji ='사과';
console.log(apple);

delete apple.emoji
console.log(apple);

