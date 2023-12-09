class Calculator {
    constructor() { }

    addT(a, b) {
        return a + b;
    }

    multiple(a, b) {
        return a * b;
    }

    minus(a, b) {
        return a - b;
    }

    divide(a, b) {
        return a / b;
    }
}

var cal = new Calculator();
console.log(cal(1,2));

console.log("app2");
