const n = 123;
// const solution = n => {
//     return (n+"").split("").reduce((arr,pre)=>Number(arr)+Number(pre))
// }


//(n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
// ==> 초기값을 0으로 해줘야 숫자열 + 문자열 = 문자열 방지할수있음

// console.log(solution(n))
// console.log(n.toString().split("")) 


const solution = n => {
    var answer = 0; 
    (n+"").split("").forEach((e,i)=> answer += parseInt(e) )
    return answer
}

console.log(solution(n))
