//카운트만들기

//0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
//Counter 클래스 만들기

class Counter {
    #value
    constructor(startValue) {
        if(isNaN(startValue || startValue < 0)) {
            this.#value = 0;
        }else{
            this.#value = startValue;
        }
    }

    get value() {
        return this.#value;
    }

    increase = () => {
        this.#value++;
    }
}
const counter = new Counter(0); // 클래스 만들기전에 작성해본다
counter.increase();
counter.increase();
counter.increase();
console.log(counter.value)
