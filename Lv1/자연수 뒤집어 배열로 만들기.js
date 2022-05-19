const n = 1234567129349;

const solution = n => {
    return (n+"").split("").reverse().map(e=> parseInt(e))
}

console.log(solution(n))