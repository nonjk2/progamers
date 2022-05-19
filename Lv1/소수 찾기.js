const n = 1000000

function solution(n) {
    let answer = 0;
    const start = new Array(n+1).fill(undefined);
    const end = Math.sqrt(n) 
    
    for(let i = 2; i <= end; ++i){
        if(start[i] === false){
            continue; 
        }
        for(let j = i * i; j <= n; j += i){
            start[j] = false;
        }
    }
    for(let i = 2; i <= n; ++i){
        if(start[i] === undefined){
            answer++;
        }
    }
    return answer;
}
console.log( solution(n))


//도움받은곳 ++https://velog.io/@goblin820/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8-JavaScript-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%86%8C%EC%88%98-%EC%B0%BE%EA%B8%B0