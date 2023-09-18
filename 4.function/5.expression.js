//함수 선언문 function name(){}
//함수 표현식 const neme = function(){}// 값으로 계산될수있는 표현식이다.
//화살표 함수 const name = (인자) => {}

let add = function (a, b){
    return a+ b;
};
add = (a,b) => {
    return a + b;
}
console.log(add(1,6))

//생성자 함수 const object = new Function(); 

//IIFE (Immedicately-Invoked Function Expressions)
(function run(){
    console.log('hi')
})();