//[Symbol.iterator](); : Iterator { next(): {value, done}};
//0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기!
//0,1,2,3...,9
//0,2,4,6...,18

// 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기!
 
function makeIterable(initialValue, maxValue, callback) {
    return {
        [Symbol.iterator]() {
            let num = initialValue;//0부터 시작
            return {
                next() {
                    return { value: callback(num++) , done:  num > maxValue };//num 이 max보다 컸을때 true가 되어 종료됨.
                }
            }//iterator 함수를 호출했을때 iterator를 반환  |  iterator객체 안에는 next라는 함수가 꼭 있어야함 | next를 호출할때마다 value와 done라는 키를 가진 객체를 반환
        }
    }
}

const multiple = makeIterable(0, 10, (n) => n );

for(const num of multiple) {
    console.log(num);
}