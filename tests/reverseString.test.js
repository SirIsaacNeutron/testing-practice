import reverseString from "../src/reverseString";

test("string reversal", () => {
    expect(reverseString("test")).toEqual("tset")
})