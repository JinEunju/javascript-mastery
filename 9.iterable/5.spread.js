//spread 연산자, 전개구문
// 모든 Interable은 Spread 될 수있다
//순회가 가능한 모든 것들은 촤르르륽 펼쳐 질 수 있다.
//func(...iterable)
//[...iterable]
//{...obj}
//EcmaScript 2018

function add(a, b, c) {
    return a+b+c;
}

const nums = [1,2,3];
//console.log(add(nums[0], nums[1], nums[2]));
console.log(add(...nums))//spread 연산자 사용하면 촤르륵 펼쳐짐 똑같이 6찍힘

// Rest parameters
function sum(first, second, ...nums) {//첫번째, 두번짜 인자는 아는데 그 뒤는 값 받아와서 배열 출력해줘
    console.log(nums)
}

sum(1,2,3,5,6,7,0)

//Array Concat

const fruits1 = ['🍌', '🍎'];
const fruits2 = ['🍇', '🍑'];

let arr = fruits1.concat(fruits2);//배열 더해줄때 썼던 concat
arr = [...fruits1, '🍎', ...fruits2]//간편하게 사이에 딸기 추가 가능
console.log(arr);

//Object에서도 사용 가능

const ellie = {name: 'Ellie', age: 20, home: {address : 'home'}};
/*{
    name: 'Ellie',
    age: 20,
    home: { address: 'home' },
    job: 's/w engineer'
  }*/
const updated = {
    ...ellie, 
    job: 's/w engineer'
}
console.log(updated)//기존 객체 영향 없음{ name: 'Ellie', age: 20, job: 's/w engineer' }
