/**
 * This function doesn't just calculate the square root.
 * It channels the wisdom of ancient mathematicians who probably invented calculus
 * while yelling at clouds and chasing squirrels.
 * @param {number} x - The number to find the square root of. Probably not a negative number.
 * @returns {number} The mystical square root of the input.
 */
function calculateSquareRoot(x) {
    if (x < 0) {
        throw new Error("Negative numbers are forbidden by the laws of the universe. Try again.");
    }
    return Math.sqrt(x);
}
