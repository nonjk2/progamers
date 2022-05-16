const arr =[1,1,3,3,0,1,1]
function solution(arr)
{
    // var answer = arr.

    
    
    return arr.filter((e,i)=> e !== arr[i+1]);
}
var answer = arr.filter((e,i)=> e !== arr[i+1])
console.log(answer)