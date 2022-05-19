let n = [1,2,3,5,3,4,7,2,1];
// const a = n.sort()[0]



// let answer = n.splice(a.sort()[0], 1)
const answer = n.map((e,i,arr)=> e===1 ? 0  : e )
// while (n.includes(a.sort()[0])) {
//     n.slice(a.sort()[0])
//     break;
// }
console.log(answer)
// const solution = n => {
    
//     return
// }
