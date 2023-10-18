//옵셔널 체이닝 연산지 Optional Chaining Operator
//ES11 (ECMAScript 2020)
// ?.
//null 또는 undefined을 확인할때

let item = { price: 1 };
const price = item?.price; //아이템이 있니>있으면 접근. | 없으면 접근하지마
console.log(price);

let obj = { name: '🐶', owner: {name: '엘리'}};
const ownerName = obj && obj.owner && obj.owner.name;
function printName (obj) {
    //const ownerName = obj && obj.owner && obj.owner.name;//obj있다면 obj.owne있다면 obj.owner.name있다면 true
    const ownerName = obj?.owner?.name;//엘리 | 없으면 undifind
    console.log(ownerName)
}
console.log(`----------------------`);
printName(obj)