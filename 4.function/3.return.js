


function add(a, b){
    return a + b//return을 명시적으로 하지 않으면 자동으로 undifind가 반환됨
}

const result = add(1,2)
console.log(result);

//return을 함수 중간에 하게 되면 함수가 종료됨
//사용예: 조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료함!
function print(text){
    console.log(text)//return 필요없는경우
}
console.clear();
//숫자가 0보다 작다면 함수를 종료하고 그렇지 않을때만 출력
//return 함수중간에 하게되면 함수가 종료됨
//사용예: 조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료함
function numPrint(num){
    if(num < 0){
        return; //return undifind
    }
    console.log(num);
}
numPrint(-1)