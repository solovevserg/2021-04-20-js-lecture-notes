function sum(a,b) {
    return a + b
}

const sum2 = function(a, b) {
    return a + b;
}

const sum3 = function sumExprFunc(a, b) {
    return a + b;
}

const mult = (function (a,b) { return a * b } )(4,2);
// alert(mult);

const sum4 = (a,b) => a + b;
// alert(sum4(2,5));

const complexFunc = x => {
    const isEven = x % 2 === 0;
    if (isEven) {
        return -1;
    } else {
        return 1;
    }
}

// alert(complexFunc(4))

const elems = [1,2,3,4];
const squares = elems.map(x => x ** 2);
alert(squares)
