
const s = "1234"
function solution(s) {
    var answer = true;
    return s.length===4 ||s.length=== 6 ? /[a-zA-Z]/.test(s) ? false : true : false
}
console.log(solution(s))
// console.log([...s])
