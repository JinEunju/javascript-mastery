//매개변수의 기본값은 무조건 undefined
//매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
//매개변수 function add(a = 1, b = 1){ }기본값 Default Parameters a =1, b=1 
function add(a, b){
    console.log(arguments[0]+'ㅎ');
 return a+b;
}
console.log(add(1,2,3));

//Rest 매개변수

function sum(...numbers){ //얼마나 많은 인자를 받을지 모를때, 모든걸 배열로 받을때

}