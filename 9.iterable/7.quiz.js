const prop = {
    name : 'Button',
    styles: {
        size: 20,
        color: 'black',
    },
};
/*let {
    styles: {
        size,
        color
    }
} = prop;*/
function changeColor({name, styles: {color , size}}) {//구조분해할당 중첩해나갈수있음
    console.log(size);
}
changeColor(prop);