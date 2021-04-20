// window

let personName = 2;
personName = 'Вася';

function sayHello() { // [[scope]] = GlobalLE
    let personName = 'Илья'; // LE.personName = 'Илья';
    const greeting = 'Hi, '; // LE.greeeting = 'Hi, ';
    alert(greeting + personName);
}

function sayBy() {
    // const personName = 'Аня';

    alertBy();

    function alertBy() {
        const goodbye = `Пока, ${personName}`;
        alert(goodbye);
    }

}

sayBy();

// sayHello()
