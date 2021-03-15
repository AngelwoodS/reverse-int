module.exports = function reverse (n) {
    let absol=Math.abs(n);
    let str=String(absol);
    let mass=str.split("");
    let rev=mass.reverse().join("");
    let revred=Number(rev);
    return revred;
}
