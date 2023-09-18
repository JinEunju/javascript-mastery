// class Tiger {
//     constructor (color) {
//         this.color = color;
//     }
//     eat() {
//         console.log('먹자 !');
//     }
//     sleep() {
//         console.log('잔다');
//     }
// }

// class Dog {
//     constructor (color) {
//         this.color = color;
//     }
//     eat() {
//         console.log('먹자 !');
//     }
//     sleep() {
//         console.log('잔다');
//     }
//     play() {
//         console.log('놀쟈');
//     }
// }
class Animal {
    constructor (color) {
        this.color = color;
    }
    eat() {
        console.log('먹자 !');
    }
    sleep() {
        console.log('잔다');
    }
    
}

class Tiger extends Animal {}
const tiger = new Tiger('노랑이');
console.log(tiger)
tiger.sleep();
tiger.eat();


class Dog extends Animal {
    constructor(color, ownerName) {//부모에있는 constructor도 받아와야함
        super(color); //super : 상속하고 있는 부모를 가르킴. 부모 생성자
        this.ownerName = ownerName;
    }
    play() {
        console.log('놀쟈');
    }
        //오버라이딩 overriding 메소드 덮어씌운다. 함수 그대로 선언해서 다른행동 구현
        //부모기능 유지 + 추가 적인것
    eat() {
        super.eat();//부모기능유지+추가
        console.log('강아지가 먹는다 !');
    }
}
const dog = new Dog('빨강이','엘리');
console.log(dog);
dog.sleep();
dog.eat();