function solution(n) {
    var answer = 0;
    for(let i =1; i<n+1 ; i++){
        n%i===1 ? answer=i :false
        if(answer!==0)break;
    }
    return answer;
}
solution(12)