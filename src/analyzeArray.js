/**
 * Return statistics on an array.
 * 
 * @param {Array} An array of numbers.
 * @return {Object} An object with the average, min, max, and length statistics for the array.
 */
export default function analyzeArray(array) {
    let sum = 0
    let min = Infinity
    let max = -Infinity
    for (let i = 0; i < array.length; ++i) {
        const currentNum = array[i]

        sum += currentNum
        if (currentNum < min) {
            min = currentNum
        }
        if (currentNum > max) {
            max = currentNum
        } 
    }
    const average = sum / array.length
    return { average, min, max, length: array.length }
}