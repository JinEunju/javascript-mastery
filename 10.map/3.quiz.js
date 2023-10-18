// 주어진 배열에서 중복을 제거 하라
const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];
//  ['🍌', '🍎', '🍇', '🍑']

console.clear();
console.log(new Set(fruits))  //Set(4) { '🍌', '🍎', '🍇', '🍑' } 이렇게 하면 객체로 나와서
console.log([...new Set(fruits)]);//[ '🍌', '🍎', '🍇', '🍑' ] 배열 리터럴의 스프레드 연산자를 사용해서 배열로 만들어준다.

function removeDuplication(array) {//재사용 가능하게 만들기
    return [...new Set(fruits)]
}
console.log(removeDuplication(fruits))

// 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

function findIntersection(set1, set2){
    //const array = Array.from(set1) array의 set1을 이용해서 만든다
    const array = [...set1].filter((item) => set2.has(item));
    return new Set(array); 
    // return new Set([...set1].filter((item) => set2.has(item))); 합쳐도 가능
}
console.log(findIntersection(set1, set2));//Set(3) { 1, 2, 3 }
