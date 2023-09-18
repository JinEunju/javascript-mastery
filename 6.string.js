const textObg = new String('Hello World!')
const text = 'Hello World!'
console.log(textObg);
console.log(text);

console.log(text.charAt(0));
console.log(text.indexOf('H'));
console.log(text.includes('!'));

const action1 = (max) => {
    for(let i = 0; i <= max; i++){
        console.log(i)
    }
}
const action2 = (max) => {
    for(let i = 0; i <= max; i++){
        console.log(i * 2)
    }
}

function iterate(max, action){
    return action(max)
};
iterate(5, action1)
iterate(5, action2)