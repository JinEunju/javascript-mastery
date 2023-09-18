//조건문

//switch

let day = 7;
let dayName;


switch(day){
    case 0: 
    dayName = '월요일';
    break; //멈추기
    case 1: 
    dayName = '화요일';
    break;
    case 2: 
    dayName = '수요일';
    break;
    case 3: 
    dayName = '목요일';
    break;
    case 4: 
    dayName = '금요일';
    break;
    case 5: 
    dayName = '토요일';
    break;
    case 6: 
    dayName = '일요일';
    break;
    default: //else 와 처리 같음
    console.log('해당하는 요일이 없음!')
}
console.log(dayName)

let condition = 'happy';
let text;
switch(condition){
    case 'good': 
    case 'okay':
        text = '귯';
    break; //멈추기
    case 'bad': 
        text = '나쁨';
    break;
    default: //else 와 처리 같음
    console.log(`sorry ${condition}`)
}
console.log(text)


/*

특정조건

*/