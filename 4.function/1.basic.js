function add(num1,num2){
    return  num1 + num2; //함수에서 값을 외부로 반환할땐 return 키워드 사용해야함
}

console.log(add(1,2));


let lastName = '김'
let firstName = '은주'



function fullName(lN, fN){
    return `${lN}${fN}`
}
console.log(fullName(lastName,firstName))