
const s= "pPoooyY"
function solution(s){
    var countP =0,
    countY=0;
    for (let i = 0; i < s.length; i++) {
        s.toLowerCase().charAt(i)==="p" ? countP++ : s.toLowerCase().charAt(i)==="y" ? countY++ : false
    }
    return countP===countY;
}
solution(s)
