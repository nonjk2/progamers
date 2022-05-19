const n = [2,3,3,2,3,2,2,2,3,4];
// const a = n.sort()
// console.log(n.splice)
// const solution = n => {
//     const a = n.concat()
//     while (n.includes(a.sort()[0])) {
//         n.length===1 ? n=[-1] : n.splice(n.indexOf(a.sort()[0]),1) 
//     }
//     return n    
// }

// const solution = n => {
//     const a = n.concat()
//     n.length===1 ? n=[-1] : n.splice(n.indexOf(a.sort()[0]),1)
//     return n
// }

const solution = n => {

    let source = n[0];
    for (let i = 0; i < n.length; i++) {
        n[i] <= source ? source = n[i] : false
    }
    n.splice(n.indexOf(source),1)
    if (n.length === 0) {n = [-1]}
    return n  
}

console.log(JSON.stringify(solution(n)) ) 

