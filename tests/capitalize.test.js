import capitalize from "../src/capitalize"

test("uncapitalized string", () => {
    expect(capitalize("testing string")).toEqual("Testing string")
})

test("length 1 string", () => {
    expect(capitalize("t")).toEqual("T")
})

test("capitalized string", () => {
    expect(capitalize("I am a gramatically correct sentence.")).toEqual("I am a gramatically correct sentence.")
})

test("length 0 string", () => {
    expect(capitalize("")).toEqual("")
})