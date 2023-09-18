// 반복문 Loop Statement
// for(변수선언문; 조건식; 증감식){}

/*
실행순서: 
1. 변수선언문
2. 조건식의 값이 참이면 {} 코드블럭을 수행
3. 증감식을 수행
4. 조건식이 거짓이 될때까지 2,3번을 반복함
*/

let i;
for(i=0; i<5; i++){
    //console.log(i);
}
//console.log(i);

//반복문 제어 break, continue

for(let i = 0; i < 10; i++){
    if(i === 5){
        continue; //가있으면 아래껀 무시됨 => 아래꺼 무시할일이 모가 있지
        console.log('i 가 10이 되었다');
        //break //for문 스탑 .. 반복문 특정한 조건에 맞으면 스탑
        console.log('1');
        console.log('2')
    }else{
        //console.log('else')
    }
    console.log(i)
}

/*
continue는 조건문 안에서 해당 조건에 맞으면 if조건안에 남은 코드들을 무시하고 다음 for문 돌아감
break는 조건문 안에서 해당조건이 맞으면 뒤에있는 for문도 돌아가지 않음.
*/