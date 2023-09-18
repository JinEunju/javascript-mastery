const textObg = new String('Hello World!');
const text = 'Hello World!'
console.log(textObg);
console.log(text);
console.log('ㅎㅎ'+text.substring)//내장객체 확인

console.log(text.charAt(0));//text[0]과 같다
console.log(text.indexOf('H')); //첫번째부터 몇번째순서인지 알려준다 <=> lastOf
console.log(text.includes('!')); //특정 문자가 있는지 확인해준다 , 대소문자도 구분한다
console.log('startsWith: ' + text.startsWith('He'));//He로 시작하는지 확인해준다
console.log('endsWith: ' + text.endsWith('ㅁ!'));//!로 끝나는지 확인해준다

console.log('대문자변환: ' + text.toUpperCase());
console.log('소문자변환: ' + text.toLowerCase());

console.log('특정한 문자열 가져오기: ' + text.substring(0, 2)) //0부터 2번째 글자까지
console.log('특정한 문자열 삭제: ' + text.slice(2), text.slice(-2));

const space = '        space       '; 
console.log('공백삭제: ' + space +' => '+space.trim());

const longText = 'Get to the, point';
console.log('문자끊기: 스페이스로 끊기 => ' + longText.split(' '))//스페이스로 끊기
console.log('문자끊기: 콤마와 스페이스로 끊기 => ' + longText.split(', ',2)) //콤마와 스페이스로 끊기
/*
const action1 = (max) => {
    for(let i = 0; i <= max; i++){
        console.log(i)
    }
}
const action2 = (max) => {
    for(let i = 0; i <= max; i++){
        console.log(i * 2)
    }
}

function iterate(max, action){
    return action(max)
};
iterate(5, action1)
iterate(5, action2)*/