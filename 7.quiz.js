// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]



/*
function replace(array, to, from) {
    const replaced = Array.from(array);
    for(let i=0; i<replaced.length; i++){
        if(replaced[i] === to){
            replaced[i] = from;
        }
    }
    return replaced;
}
*/

function replace(arr, to, from){
    const replaced = Array.from(arr);
    replaced.forEach((item, idx) => {
        if(item === to){
            replaced[idx] = from;
        }
    });
    return replaced;
}


const array = ['🍌', '🍓', '🍇', '🍓'];
const result = replace(array, '🍓', '🥝');
console.log(`forEach : ${result}`);

 /* 
    답 function replace(arr, to, from){
       return arr.map((item) => (item === from ? to : item));
}
*/
// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
/*
function count(array, item){
    let counter = 0;
    for(let j=0; j<array.length; j++){
        if(array[j] === item){
            counter+=1;
        }
    }
    return counter

}
*/
function count(array, to){
    let counter = 0;
    array.forEach((item) => {
        if(item === to){
            counter++;
        }
    })
    return counter;
}

const result1 = count([ '🍌', '🥝', '🍇', '🥝' ], '🍇')
console.log(`답은: ${result1}`)

/* 
    답 function count(array, to){
        return array.fillter((value) => (value === to).length; )
    }
}
*/


// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

/*
function match(input, search){
    const result2 = [];
    for(let k=0; k<input.length; k++){
        if(search.includes(input[k])){
            result2.push(input[k]);
        }
    }
    return result2
}
*/

function match(arr1, arr2){
    const newArr = [];
    arr1.filter((item) => {
        arr2.forEach((i) => {
            if(item === i){
                newArr.push(item);
            }
        })
    });
        return newArr

}

const Arr3 = ['🍌', '🥝', '🍇'];
const Arr4 =  ['🍌', '🍓', '🍇', '🍓'];
console.log('답은 :' + match(Arr3, Arr4))

/*
답: function match(arr1, arr2){
    return arr1.filter(item => arr2.includes(item));
}

*/



// 퀴즈 4

// 5이상(보다 큰)의 숫자들의 평균

let result3 = [1,2,3,4,5].reduce((sum, value) => { //sum을 전달받을꺼고 value를 더해줄꺼다
    sum += value;
    return sum;
}, 0);//0은 sum의 초기화값
result3 = [1,2,3,4,5].reduce((sum, value) => (sum += value), 0);//간략 버전

const nums = [3, 16, 5, 25, 4, 34, 21];

const newNums = nums.map((newItem) => {
    if(newItem > 5){
        return newItem;
    }
    return 0;
})
console.log(newNums)
let numsAver = newNums.reduce((sum, value) => {
        sum += value;
        return sum
}, 0)
const resultAver = numsAver / newNums.length;
console.log(resultAver)

/*
답: const result2 = nums
.filter((num) => num > 5) //16,25,24,21
.reduce((avg, num, _ ,array) =>  avg + num / 4 , 0)//index는 사용하지 않아서 _로 표시 하였다.

*/




