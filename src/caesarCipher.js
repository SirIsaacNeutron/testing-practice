const alphabetChars = "abcdefghijklmnopqrstuvwxyz"

/**
 * Returns a string with each character shifted by a shift factor.
 * 
 * @param {String} string The string to be encrypted.
 * @param {number} shiftFactor [1-25] The amount by which each character is shifted. 1 = a -> b, 2 = a -> c, etc.
 * @return {String} A string encrypted by the Caesar cipher.
 */
export default function caesarCipher(string, shiftFactor) {
    let newString = ""
    for (const char of string) {
        newString += shiftCharacter(char, shiftFactor)
    }
    return newString
}

function shiftCharacter(character, shiftFactor) {
    const alphanumeric = /[a-zA-Z0-9]/
    if (alphanumeric.test(character)) {
        // Z -> A wraparound
        if (character.toLowerCase() === "z") {
            character = String.fromCharCode(character.charCodeAt(0) - 26)
        }
        return String.fromCharCode(character.charCodeAt(0) + shiftFactor)
    }
    return character
}