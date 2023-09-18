const add = (a,b) => a + b;
const multiply = (a,b) => a*b;

//함수를 인자로 받는 고차함수


//전달된 action은 콜백함수이다
//전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
//함수를 가르키고 있는 함수의 레퍼런스(참조값)가 전달된다.
//그래서 함수는 고차함수안에서 필요한 순간에 호출이 나중에 된다.
function calculator(a, b, action){
    if(a<0 || b < 0){
        return;
    }
    let result = action(a, b);
    console.log(result)
    return result;//얘 왜 반환해주지?!
}

calculator(1,2,add)//출력하지 않고 함수를 전달한다
calculator(1,2,multiply);



//주어진 숫자만큼 0부터 순회하는 함수
//순회하면서 주어진 특정한 일을 수행해야함

//5, 순회하는 숫자를 다 출력하고 싶음
//5, 순회하는 숫자의 두배값을 다 출력하고 싶음

//function interate(max, action)
console.clear()
const number = (a) => {
    for(let i=0; i<a; i++){
        console.log(i);
    }
}
const townumber = (a) => a*2;
//console.log(number(5))
//console.log(townumber(5))

function iterate(max, action){
    let result = action(max);
    console.log(result);
    return result
}
iterate(15, townumber)


function iterate2(max, action){
    for(let i=0; i<max; i++){
        action(i);
    }
}
function log(num){
    console.log(num)
}
function 곱하기(num){
    console.log(num*2)
}

iterate2(5, log)
iterate2(4, 곱하기)
iterate2(20, (num => console.log(num)))
iterate2(4, 곱하기)

setTimeout(callback, 1000)

