function flex() {
    return `I am ${this.firstName} and you are a loser`;
}

const vasya = {
    firstName: 'Vasiliy', // Свойство
    age: 25,
    introduce: function () { // Метод
        return `I am ${this.firstName}`;
    },
    sayAge() { // Метод
        return `I am ${this.age} years old`;
    },
    flex: flex,
}

const ilya = {
    firstName: 'Ilya',
    // flex: flex,
    introduce: vasya.introduce,
}

// Symbol, TypeScript - подходы для инкапсуляции

// alert(vasya.introduce === ilya.introduce)
// alert(vasya.flex());
// alert(ilya.flex());

// alert(flex.apply(vasya))

// const flexByIlya = flex.bind(ilya);
const flexByIlya = vasya.flex.bind(ilya);
alert(flexByIlya());

// function sum(a, b) {
//     return a + b;
// }

// alert(sum.apply(null, 2, 3));