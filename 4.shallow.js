const pizza = { name: '🍕', price: 2};
const ramen = { name: '🍜', price: 3};
const sushi = { name: '🍣', price: 1};

const stroe1 = [pizza, ramen];
const stroe2 = Array.from(stroe1);
console.log('stroe1: ',stroe1)//stroe1:  [ { name: '🍕', price: 2 }, { name: '🍜', price: 3 } ]
console.log('stroe2: ',stroe2)//stroe2:  [ { name: '🍕', price: 2 }, { name: '🍜', price: 3 } ]

stroe2.push(sushi);
console.log('stroe1: ',stroe1)
console.log('stroe2: ',stroe2)

pizza.price = 5;
console.log(stroe2);
/*
 { name: '🍕', price: 5 },
  { name: '🍜', price: 3 },
  { name: '🍣', price: 1 }
*/

/*

    얕은 복사 Shallow Copy - 객체는 메모리 주소 전달
    자바스크립트에서 복사할때는 항상 얕은 복사가 이루어짐 !
    Array.from, concat, slice, spread(...), Object.assign

*/