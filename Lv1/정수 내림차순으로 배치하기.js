const a = 13851515395831;

const solution = n => {
    return +(n+"").split("").sort((a,b) => b-a).join("")
}

console.log(solution(a)) 