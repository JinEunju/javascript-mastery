//객체를 손쉽게 만들수있는 템플릿
//1. 생성자 함수(오래된 고전적인 방법)
//2. 클래스 => 객체지향


//class 로 시작
class Fruit {
    //생성자 : new 키워드로 객체를 생성할때 호출되는 함수.
    constructor(name, emoji){//constructor 생성자: 필요한 걸 채워줌
        this.names = name;
        this.emojis = emoji;
    //return this//생략가능
}
    display = () => {//this 붙힐 필요없음
        console.log(`${this.names}: ${this.emojis}`);
    };
}
const apple1 = new Fruit('ap', '애폴');
const og1 = new Fruit('og', '오렌디');
console.log(apple1.emojis)