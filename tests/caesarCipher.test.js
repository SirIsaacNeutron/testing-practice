import caesarCipher from "../src/caesarCipher";

test("encrypting strings", () => {
    expect(caesarCipher("JavaScript is powerful. Z becomes C.", 3)).toEqual("MdydVfulsw lv srzhuixo. C ehfrphv F.")
})