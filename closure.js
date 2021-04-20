const b = 3;

function sum() {
    alert(a + b)
}

sum(); // a == undefined, b = 3

var a = 2;

sum();

a = 3

sum();

// LEG

function makeCounter() { // LE1
    let count = 0;
    function counter() { // LE2, [[Scope]] = LE1
        return ++count;
    }
    return counter;
}

const counter = makeCounter();
const counter2 = makeCounter();

alert(counter());
alert(counter2());
alert(counter());
alert(counter());
alert(counter2());
alert(counter2());
