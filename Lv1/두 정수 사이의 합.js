const a =3,
b =3;
const c = new Array(Math.abs(a-b)+1);

function solution(a, b) {
    return new Array(Math.abs(a-b)+1).fill(undefined).map((e,i)=>e=(a>=b ? i+b : i+a)).reduce((pre,cur)=> pre+cur);
}

var answer = new Array(Math.abs(a-b)+1).fill(undefined).map((e,i)=>e=(a>=b ? i+b : i+a)).reduce((pre,cur)=> pre+cur)
console.log(JSON.stringify(answer))