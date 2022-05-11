// const sizes =[[60, 50], [30, 70], [60, 30], [80, 40]]
const sizes = [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]
// const sizes = [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]
// function solution(sizes) {
//     const max = sizes.reduce((acc, cur) =>acc.concat(cur)).reduce((acc,cur)=>Math.max(acc,cur))
//     const min = sizes.filter(e=>e.includes(max)).reduce((acc,cur)=> acc.concat(cur)).filter(e=> !(e===max)).reduce((acc,cur) => acc > cur ? acc : cur)
//     const a = sizes.filter((e)=> (e[0]>=min)&&( e[1]>=min)).reduce((acc,cur)=> acc.concat(cur)).sort((a,b)=> a-b).filter((e,i,arr)=> e !== arr[i+1])
//     answer = a.length>=3? max * a[1] : max * a[0]
// }

function solution(sizes) {
    const rotated = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);

    let maxSize = [0, 0];
    rotated.forEach(([w, h]) => {
        if (w > maxSize[0]) maxSize[0] = w;
        if (h > maxSize[1]) maxSize[1] = h;
    })
    return maxSize[0]*maxSize[1];
}


function solution2() {
    const newSizes = sizes.map(e => e.sort((a, b) => a - b));
    console.log(JSON.stringify(newSizes))
    console.log(Math.max(...newSizes.map(e => e[0])))
    console.log(Math.max(...newSizes.map(e => e[1])))

    return Math.max(...newSizes.map(e => e[0])) * Math.max(...newSizes.map(e => e[1]));

}
solution2()
 // 2차원 배열의 
