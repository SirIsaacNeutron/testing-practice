import Calculator from "../src/calculator";

const calculator = new Calculator()

test("multiply", () => {
    expect(calculator.multiply(11, 2)).toEqual(22)
})