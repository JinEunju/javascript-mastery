//UTC 기준(협정 세계시, 1970년 1월 1일 UTC 자정과의 시간차이를 밀리초 단위로 표기)

console.log(new Date());
console.log(new Date('Jun 5, 2022'));
console.log(new Date('2022-12-17T03:24:60'));

console.log(Date.now());

const now = new Date();
now.setFullYear(2023);
now.setMonth(9); //month는 0이 1월임

console.log(now)
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getTime())

console.log(now.toString())
console.log(now.toDateString())
console.log(now.toTimeString())
console.log(now.toISOString())//ISO 8601형식
console.log(now.toLocaleString('en-US'))//미국형식
console.log(now.toLocaleString('ko-KR'))//한국형식
