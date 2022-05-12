const arr1 =[9, 20, 28, 18, 11],
      arr2 =[30, 1, 21, 17, 28]
const n = 5;
function solution() {
    const twojin = arr => {
        let a= arr.toString(2).length 
        return "0".repeat(n-a)+arr.toString(2)
    }
    return new Array(n).fill(undefined)
    .map((e,i)=> {
        var c = "";
        for (let j = 0; j < n; j++) {      
            c += twojin(arr1[i]).charAt(j)==="1"||twojin(arr2[i]).charAt(j)==="1" ? "#" : " " 
        }
        return c
    });;
    
}
solution()



var solution2=(n,a,b)=>a.map((a,i)=>(a|b[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g,'#'))
// 위에 것을 압축 문제풀이 배워감 ㄸ....와 미쳤네 그냥
// twojin 개 짓거리한걸 padstart하나로 해결 그리고 for문말고 (a|b[i])로 모든걸 압축해버림

console.log( solution2(n, arr1, arr2))