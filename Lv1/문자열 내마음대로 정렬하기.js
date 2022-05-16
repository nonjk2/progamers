const string = ["abce", "abcd", "cdx"]
const n = 2
var answer = [];
// function solution(strings, n) {
    
//     return answer;
// }

const solution=(string,n) =>{
    
    return string.sort((a,b)=> a>b || (a===b) -1)
    .map((e,i)=>{return {index : i , value:e.charAt(n)}})
    .sort((a,b)=>(a.value > b.value) || +(a.value === b.value) - 1) 
    .map(e=> string[e.index])
}

console.log(JSON.stringify(solution(string,n)) )

//더 축소 가능 하지만 넘무 귀찮음 참고로 true = 1 이로 false = 0임 bool 정의