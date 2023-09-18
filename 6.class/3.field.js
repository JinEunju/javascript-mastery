//static 정적 프로퍼티, 메서드
//접근제어자 - 캡슐화
//private(#), public(기본)
class Fruit {
    #names;
    type = '과일'//초기화가 되어야한다면 초기화데이터 생성
    //생성자 : new 키워드로 객체를 생성할때 호출되는 함수.
    constructor(name, emoji){//constructor 생성자: 필요한 걸 채워줌
        this.names = name;
        this.emojis = emoji;
    //return this//생략가능
        }
#display = () => {//this 붙힐 필요없음
        console.log(`${this.#names}: ${this.emojis}`);
    };
}

const banana = new Fruit('apple', '사과') //외부에서 변경 가능 
//banana.#names = '오렌디'
console.log(banana);
//apple1.display()