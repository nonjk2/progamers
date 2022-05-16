
const arr = [5, 9, 7, 10]
function solution(arr, divisor) {
    var arr2 = arr.filter(e=> e % divisor ===0).sort((a,b)=>a-b)    
    return arr2.length===0 ? [-1] : arr2;
}

console.log( solution(arr , 5))
