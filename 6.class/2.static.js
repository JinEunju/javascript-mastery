//static 정적 프로퍼티, 메서드
class Fruit {
    static MAX_FRUITS = 4;
    //생성자 : new 키워드로 객체를 생성할때 호출되는 함수.
    constructor(name, emoji){//constructor 생성자: 필요한 걸 채워줌
        this.names = name;
        this.emojis = emoji;
    //return this//생략가능
}

    //인스턴스 레벨의 메서드
    display = () => {//this 붙힐 필요없음
        console.log(`${this.names}: ${this.emojis}`);
    };
     //클래스 레벨의 메서드
    static makeRandomFriut() {
        //클래스 레벨의 메서드에서는 this 참조할수 없음
        return new Fruit('banana','바나낭');
    }
}

const banana = Fruit.makeRandomFriut();
console.log(banana);
console.log(Fruit.MAX_FRUITS)
const apple1 = new Fruit('ap', '애폴');
const og1 = new Fruit('og', '오렌디');
//apple1.display()