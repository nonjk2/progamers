const s = "try hello world"

// function solution(s) {
//     var answer = '';
//     return answer;
// }
const solution= s =>s.split(" ").map(e=> {
    var Word = "";
    for (let i = 0; i < e.length; i++) {
        i%2 === 0 ? Word += e.charAt(i).toUpperCase() : Word += e.charAt(i).toLowerCase()      
    }
    return Word;
}).join(" ")

solution(s)