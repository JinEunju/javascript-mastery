/* Map

순서 중요 X => 키로 찾아옴

유일한 키를 가지고 있어야함 => 키 중복X | 값은 중복 O

맵이 오브젝트와 유사함 | 맵을 오브젝트처럼 사용 | 오브젝트를 맵처럼 사용

*/

const map = new Map([
    ['key1', '🍎'],
    ['key2', '🍌'],
]);

console.log(map);

//사이즈 확인
console.log(map.size);//2

//존재하는지 확인
console.log(map.has('key1'));//true => 키로 확인가넝
console.log(map.has('key6'));//false

//순회
map.forEach((value, key) => console.log(key, value))//value와 key를 받아올수있다. | 간편
console.log(map.keys()); // { 'key1', 'key2' }
console.log(map.values());// { '🍎', '🍌' }
console.log(map.entries());//키밸류 모두 | { [ 'key1', '🍎' ], [ 'key2', '🍌' ] }

//찾기
console.log(map.get('key1'))//🍎
console.log(map.get('key2'))//🍌
console.log(map.get('key3'))//undefined

//추가
map.set('key3', '🥝');
console.log(map)//Map(3) { 'key1' => '🍎', 'key2' => '🍌', 'key3' => '🥝' }

//삭제
map.delete('key3');
console.log(map);//Map(2) { 'key1' => '🍎', 'key2' => '🍌' }

//전부 삭제
map.clear();
console.log(map);//Map(0) {}

//맵과 오브젝트와의 큰 차이점??

const key = { name: 'milk', price: 10 };
const milk = {name: 'milk', price: 10, description: '맛있는우유' };
const obj = {
    [key]: milk,//키라는 오브젝트를 이용해서 milk라는 값을 할당해줄꺼다.
}
console.log(obj);
/*
{
  '[object Object]': { name: 'milk', price: 10, description: '맛있는우유' }
}
*/

const map2 = new Map([[key, milk]]);
console.log(map2)
/*
Map(1) {
  { name: 'milk', price: 10 } => { name: 'milk', price: 10, description: '맛있는우유' }
}
*/

//obj는 맵에서 사용할수 있는것들을 사용할수 없다.
console.log(obj[key])//오브젝트는 키를 동적으로 접근할수있었지만 
console.log(map2[key])//맵은 접근이 불가능하다. undefined
console.log(map2.get(key))//맵에서 키를 접근하려면 get이라는 함수를 이용해서 key를 전달해서 해당하는 오브젝트를 가지고 올수있다.{ name: 'milk', price: 10, description: '맛있는우유' }


const levelMap = new Map([
    ['level1', 'a'],
    ['level2', 'b'],
    ['level3', 'c'],
    ['level4', 'd'],
])

for (let i = 0; i < levelMap.size; i++) {
    console.log(levelMap.get(`level${i+1}`));
}
//const userLanguage = navigator.language || navigator.userLanguage;
const languageCodeMap = new Map([
    ['ko-KR', '한국어'],
    ['en-US', '영어'],
    ['zh-CN', '중국어'],
    ['ja-JP', '일본어'],
]);
//const currentLanguage = languageCodeMap.get(userLanguage);
//console.log(`현재 설정 언어는 ${currentLanguage}입니다 ^^*`)
