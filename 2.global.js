console.log(globalThis)
console.log(this)//this 전역객체
console.log(Infinity)
console.log(NaN)

eval('const num = 2; console.log(num)') //문자를 값으로 평가해서 자바스크립트 코드로 출력해줌
console.log(isFinite(Infinity))//숫자가 무한한지 안한지 평가

console.log(parseInt('12.9'))

// URL (URI, Uniform Resource Identifier 하위개념)
// 아스키 문자로만 구성되어야 함
// 한글이나 특수문자는 이스케이프 처리 해야 한다.

const URL = 'https://드림코딩.com';
const encoded = encodeURI(URL);
console.log(encoded)
const decoded = decodeURI(encoded);
console.log(decoded);

//전체 URL이 아니라 부분적인 것은 Component 이용

const part = '드림코딩.com';
console.log(encodeURIComponent(part))
