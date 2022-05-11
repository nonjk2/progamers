
//const answers= [1,2,3,4,5]
const a =[1,2,3,4,5],
    b = [2,1,2,3,2,4,2,5],
    c = [3,3,1,1,2,2,4,4,5,5]

let countA = 0,
    countB = 0,
    countC = 0;
const answer = []
for (let i = 0; i < answers.length; i++) {
    answers[i]=== a[i%5] ? countA++ : false
    answers[i] === b[i%8] ? countB ++ : false
    answers[i] === c[i%10] ? countC ++ : false
}
var max = Math.max(countA,countB,countC);

if (countA === max) {answer.push(1)};
if (countB === max) {answer.push(2)};
if (countC === max) {answer.push(3)};


