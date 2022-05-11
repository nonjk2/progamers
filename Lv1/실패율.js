function solution(N, stages) {
    let answer = [];
    let people = stages.length
    for (let i = 0; i <= N; i++) {
        let a = stages.filter(n => n === i+1).length
        answer.push([i+1, a / people])
        people -= a;
    }
    answer.pop()
    answer = answer.sort((a,b) => b[1] - a[1])
    return answer.map( a => a[0]);
}