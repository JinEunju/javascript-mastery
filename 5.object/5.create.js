// const apple = {
//     name: 'apple',
//     display: function(){
//         console.log(`${this.name} : '사과'`)//객체안에서 자기자신을 접근할땐 this를 붙혀줘야한다.
//     }
// }

// const org = {
//     name: 'org',
//     display: function(){
//         console.log(`${this.name} : '오렌지'`)//객체안에서 자기자신을 접근할땐 this를 붙혀줘야한다.
//     }
// }

//생성자 함수

//대문자로 !
function Fruit(name, text){
    this.names = name;
    this.texts = text;
    this.display = () => {
        console.log(`${this.names}: ${this.texts}`);
    };
    //return this//생략가능
}

const apple1 = new Fruit('ap', '애폴');
const og1 = new Fruit('og', '오렌디');

console.log(apple1);
console.log(og1);
console.log(apple1.names)
apple1.display();
