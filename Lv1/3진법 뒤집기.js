
function solution(n) {
    var m = `${n.toString(3)}`;
    let b = "";
    for (let i = m.length; i >= 0; i--) {
        b += m.charAt(i)
    }
    return parseInt(b,3);
}
solution(45)
// const n=30;
