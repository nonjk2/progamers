const absolutes =[4,7,12]
const signs = [true,false,true]

function solution() {
    var answer = 0;
    for (let i in signs) {
        let a=0;
        (signs[i] ===true ? a=1 : a=-1)
        answer += absolutes[i] * a
    }
    return answer
}


