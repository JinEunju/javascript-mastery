// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]


function replace(array, to, from) {
    const replaced = Array.from(array);
    for(let i=0; i<replaced.length; i++){
        if(replaced[i] === to){
            replaced[i] = from;
        }
    }
    return replaced;
}

const array = ['🍌', '🍓', '🍇', '🍓'];
const result = replace(array, '🍓', '🥝');
console.log(result);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
function count(array, item){
    let counter = 0;
    for(let j=0; j<array.length; j++){
        if(array[j] === item){
            counter+=1;
        }
    }
    return counter

}
const result1 = count([ '🍌', '🥝', '🍇', '🥝' ], '🥝')
console.log(`답은: ${result1}`)





// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

function match(input, search){
    const result2 = [];
    for(let k=0; k<input.length; k++){
        if(search.includes(input[k])){
            result2.push(input[k]);
        }
    }
    return result2
}

const Arr3 = ['🍌', '🥝', '🍇'];
const Arr4 =  ['🍌', '🍓', '🍇', '🍓'];
console.log(match(Arr3, Arr4))

/*
const Arr = ['🍌', '🍓', '🍇', '🍓'];
const newArr = Arr.slice(0);
console.log(newArr);

newArr.splice(1, 1, '🥝');
newArr.splice(3, 1, '🥝');
console.log(newArr);

const Arr2 = [ '🍌', '🥝', '🍇', '🥝' ];

console.log(Arr2.includes('🥝'))

const Arr3 = ['🍌', '🥝', '🍇'];
const Arr4 =  ['🍌', '🍓', '🍇', '🍓'];
const Arr5 = Arr3.concat(Arr4);
console.log(Arr5);
*/





