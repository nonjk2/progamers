
const numbers= [2,1,3,4,1];
answer=[]
for (let i = 0; i < numbers.length; i++) {
    for (let j = i+1; j < numbers.length; j++) {
        let a = numbers[i]+numbers[j]
        answer.includes(a)? false : answer.push(a)
    }
}
answer.sort((a,b)=>a-b);
console.log(answer)