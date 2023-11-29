//logical 보다 우아하게 에러 처리

function readFile(path) {//경로를 받아서 파일을 읽는 함수가 있다고 쳐보자
    throw new Error('파일 경로를 찾을 수 없음');//에러를 던지면 밑에 내용은 실행되지 않고 앱이 크러쉬됨
    return '파일의내용';
}

/*
function processFile(path) {//경로를 받아와서
    const content = readFile(path);//파일을 읽어서 콘텐츠를 저장
    const result = 'hi' + content; // 파일에 hi라는 문자를 연결해주는 처리를 해서
    return result;//리턴한다.
}
*/

//try catch finally =>에러가 있을만한 함수를 바로 호출하면 앱이 크러쉬 되기 때문에 

function processFile(path){
    let content;
    try {// 에러를 던질수 있는 함수라면 파일을 읽어서 content 변수에 할당하는걸 시도한다
        content = readFile(path);
    } catch(error) {//에러가 발생하면 잡는다.
        console.log(error.name); //에러오브젝트 이름은 뭔지.
        console.log(error.message);//메세지는 뭔지
        console.log(error.stack);//어떤 경로를 통해서 와닿았는지.
        content = '기본내용';//파일을 읽지못한경우는 기본내용이라고 작성하자라고 처리.
    } finally { //최종 처리
        console.log('성공하든 실패하든 마지막으로 리소스를 정리할 수 있음!')
    }
    const result = 'hi' + content; // 파일에 hi라는 문자를 연결해주는 처리를 해서
    return result;//리턴한다.
}

const result = processFile('경로');
console.log(result);