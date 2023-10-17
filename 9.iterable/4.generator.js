//4.generator : 값을 생성할수있는 | 생성귀

const multible = {
    [Symbol.iterator]() {
        const max = 10; //최대값
        let num = 0;//0부터 시작
        return {
            next() {
                return { value: num++ * 2 , done:  num > max };//num 이 max보다 컸을때 true가 되어 종료됨.
            }
        }//iterator 함수를 호출했을때 iterator를 반환  |  iterator객체 안에는 next라는 함수가 꼭 있어야함 | next를 호출할때마다 value와 done라는 키를 가진 객체를 반환
    }
}

function* multipleGenerator() { // *키워드는 Generator가 만들어주고 일드는 사용자가 next를 호출할때까지 기다렸다가 반환,순회를 반복함.
    try{
        for(let i=0; i < 10; i++) {
            console.log(i)
            yield i ** 2; //return과 비슷하지만 바로 반환하지 않고 사용자가 원할때 하나씩 반환해준다.
        }
    } catch(error){
        console.log(error)
    }
}
const multiple = multipleGenerator();
//multiple.return();//끝낼거다. undefined true
 multiple.throw('error!');//error 를 던진다. //방지하려면 try, catch안에서 출력한다.
let next = multiple.next();

console.log(next.value, next.done);