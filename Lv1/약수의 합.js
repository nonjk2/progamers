const n =12;
var answer =0;
function solution(n) {
    var answer = 0;
    for (let i = 1; i <= n; i++) {
        n%i ===0 ? answer+= i : false    
    }
    return answer;
}

console.log(solution(n)) 

