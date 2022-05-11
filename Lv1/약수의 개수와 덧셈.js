function solution(left,right) {
    let answer = 0;

    for (let i = left; i <= right; i++) {
        let a =0
        for (let j = 1; j <= i; j++) {
            if(i % j === 0){a++}
            if (i === j) {
                if(a%2===0){answer+=i}
                else if(a%2===1){answer-=i}
            }
        }
    }
    return answer;
}
solution()
