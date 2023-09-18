//Math
//static properties, method

console.log(Math.E);// 오일러의 상수, 자연로그의 밑
console.log(Math.PI);// 원주율 PI값

// static method
//절대값 출력
console.log(`소수점 이하 올림: ${Math.abs(-10)}`) //=> 10
//소수점 이하 올림
console.log(`소수점 이하 올림: ${Math.ceil(1.4)}`);
//소수점 이하를 내림
console.log(`소수점 이하를 내림: ${Math.floor(1.4)}`);
//소수점 이하를 반올림
console.log(`반올림: ${Math.floor(1.4)}`);
console.log(`반올림: ${Math.round(1.7)}`);

// 정수만 반환
console.log(`정수만 반환: ${Math.trunc(1.4555)}`);

// 최대, 최소값을 찾기
console.log(`최대값을 찾기: ${Math.max(1,2,3,7,10)}`);
console.log(`최소값을 찾기: ${Math.min(1,2,3,7,10)}`);

// 거듭제곱
console.log(`거듭제곱1: ${3 ** 2}`);
console.log(`거듭제곱2: ${Math.pow(3,2)}`);

// 제곱근
console.log(`제곱근: ${Math.sqrt(9)}`);

//랜덤한 값을 반환

console.log(`랜덤: ${Math.random()}`)


// Math
console.log(Math.random())
console.log('랜덤한 숫자 정수로(floor사용): '+ Math.floor(Math.random() * 10 + 1))