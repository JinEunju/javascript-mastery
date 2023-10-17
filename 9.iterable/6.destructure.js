//구조 분해 할당 Desturing Assignment

//데이터 뭉치(그룹화)를 쉡게 만들 수 있다.
const fruits = ['🍌', '🍎', '🍌', '🍎','🍕'];
const [first, secont, ...others] = fruits;

console.log(others);

const point = [1, 2, 8];
const [y, x, z=0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji(){
    return ['apple', '🍎'];
}
const array = createEmoji();
console.log(array)
const [title, emoji] = createEmoji();//더 의미있는 이름으로 가져옴
console.log(title);
console.log(emoji);

const ellie = {name: 'Ellie', age: 20, job: 's/w engineer'};
/*function display(person) {
    console.log('이름', person.name);
    console.log('나이', person.age);
    console.log('직업', person.job);
}*/
function display({name, age, job}) {//구조를 분해해서 받아올수있다.
    console.log('이름', name);
    console.log('나이', age);
    console.log('직업', job);

}
display(ellie);

const {name, age, job: occupation, pet ='강쥐'} = ellie; //job: occupation - 이름변경,  pet ='강쥐 - 새로운 키 추가
console.log(name);
console.log(age);
console.log(occupation);
console.log(pet);