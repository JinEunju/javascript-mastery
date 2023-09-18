
let num = 11;
//num의 숫자가 짝수이면 체고, 홀수이면 안체고 출력


//1. if

if(num % 2 === 0){
    console.log('1체고');
}else{
    console.log('1안체고');
}

//2.ternary

let emoji = num % 2 === 0 ? '2체고' : '2안체고';

console.log(emoji)