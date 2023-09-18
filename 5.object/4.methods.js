const apple = {
    name: 'apple',
    display: function(){
        console.log(`${this.name} : '사과'`)//객체안에서 자기자신을 접근할땐 this를 붙혀줘야한다.
    }
}
apple.display()

//객체는 서로 연관된 정보와 함수를 묶어서 관리할수 있다.