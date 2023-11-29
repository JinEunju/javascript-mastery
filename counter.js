let count = 0;// 변수는 외부로 노출 안할꺼다.
//export default function increase(){//외부에서는 increase()함수만 노출할꺼고 이게 디폴트야
export function increase(){//모듈에서 여러개의 모듈이 있으면 default를사용할수없다
    count++;   
    console.log(count);
}