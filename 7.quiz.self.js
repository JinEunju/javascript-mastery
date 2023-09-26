// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

function replace(arr, to, from) {
    const relist = Array.from(arr)
    for(let i = 0; i<arr.length; i++){
        if(relist[i] === to){
            relist[i] = from
        }
    }
    return relist
}
const list = ['🍌', '🍓', '🍇', '🍓'];
//const result = replace(list, '🍓', '🥝');
//console.log(list, replace(list, '🍓', '🥝'))//[ '🍌', '🍓', '🍇', '🍓' ] [ '🍌', '🥝', '🍇', '🥝' ]





// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

function count(arr, item) {
    let num = 0;
    for(i = 0; i<arr.length; i++){
        if(arr[i] === item){
            num++
        }
    }
    return num

}
const list2 = [ '🍌', '🥝', '🍇', '🥝', '🍇', '🍇', '🍇' ];
const result2 = count(list2, '🍇');
console.log(result2)


// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

function same(arr1, arr2){
    const newList = [];
    for(i = 0; i<arr2.length; i++){
        if(arr1.includes(arr2[i])){
            newList.push(arr2[i]);
        }
    }
    return newList
}
const list3 = ['🍌', '🥝', '🍇', ];
const list4 = ['🍌', '🍓', '🍇', '🍓'];
const result3 = same(list3, list4);
console.log(`result3: ${result3}`);//result3: 🍌,🍇

// 퀴즈 4

// 5이상(보다 큰)의 숫자들의 평균

const nums = [3, 16, 5, 25, 4, 34, 21];