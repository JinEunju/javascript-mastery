//앞에서 발생한 에러가 버블링 될수있다. (전파)

function a(){
    throw new Error('error!');
}

function b(){
    try {
        a();
    } catch (error) {
        //console.log('error')
        console.log('생각해보니까 이 에러는 내가 핸들링 할 수 없을 것 같군!');
        throw error;
    }
    
}

function c(){
    b();
}

try {
    c();
} catch (error) {
    console.log('Catched!');
}
console.log('done!');
//최종적으로 캐치해도 되고 제일 근접한 곳에서 에러를 잡아도 된다.
//처리하기 적합한 곳에서 에러를 처리하면 된다.