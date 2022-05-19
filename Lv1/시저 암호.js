const s = "  aSDs"
const n = 1

// function solution(s, n) {
//     ;
//     return answer;
// }
const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
b= a.toLowerCase();
var answer = "";
for (let i = 0; i < s.length; i++) {
    if(s.charAt(i)===" "){
        answer += " " 
    continue;}
    a.includes(s.charAt(i)) ? answer += a[(a.indexOf(s.charAt(i))+n)%26] 
    : b.includes(s.charAt(i)) ? answer += b[(b.indexOf(s.charAt(i))+n)%26] 
    :false   
}
// console.log(a[(a.indexOf(s.charAt(0))+n)%26]) 
console.log(answer)
