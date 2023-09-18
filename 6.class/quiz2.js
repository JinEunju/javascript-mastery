//정직원과 파트타임직원을 나타낼수있는 클래스
//직원들의 정보: 이름, 부서이름, 한달 근무시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
//정직원은 시간당 10000원
//파트타임은 직원은 시간당 8000원

class staff{
    constructor(name,part,time){
        this.name = name;
        this.time = time;
        
    }
    monPay = () => {
        this.pay = part === '정직원' ? 10000 : 8000;
        return pay * time;
    }
}
const rara = new staff('라라','직원', 6)
console.log(rara.monPay);