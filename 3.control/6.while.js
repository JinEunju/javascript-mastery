// while(조건){}
//조건이 false 가 될때까지 {} 코드를 반복 실행

let num = 5;
while(num>=0){
    console.log(num);
    num--;
}
console.clear();
let active = false;
let i =0;
while(active){
    console.log(i)
    if(i === 100){
        console.log('사라이따')
        break;
    }
    i++
}

do {
    console.log('사라있당'+i)
} while (active);

/*

while은 조건이 맞을때만 실행하고
do while은 조건이 맞지않을때도 한번 실행함


while문은 조건을 적는 곳이 없으므로 밖에 써준걸로 실행할수 있다.

 */