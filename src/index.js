module.exports = function reverse(n) {
    const string = String(Math.abs(n));
    const arr = string.split("");
    const revarr = arr.reverse();
    const stringTrue = revarr.join("");
    const result = Number(stringTrue);
    return result;
};
