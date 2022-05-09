const participant =["mislav", "stanko", "mislav", "mislav", "ana","ana"]
const completion =["stanko", "ana", "mislav", "mislav","ana"]

function solution() {
    const map = new Map();
    for(let i = 0; i < participant.length; i++) {
        let a = participant[i];
        let b = completion[i];
        map.set(a, (map.get(a) || 0) + 1); // 참가자 +1
        map.set(b, (map.get(b) || 0) - 1); // 완주자 참가자-1
    }
    for(let [key, value] of map) { //for문돌려서 나머지 한명 찾기
        if(value > 0) return key;
    }
    return;
}


// function solution() {
    
//     answer="";
//     for (let i = 0; i < participant.length; i++) {
//         completion.includes(participant[i])
//         ?false
//         :answer=participant[i]
//     }
//     const result = n => n.reduce((accu, curr) => { 
//         accu[curr] = (accu[curr] || 0)+1; 
//         return accu;
//       },{});
      
//     if (!answer) {
//         for (let key in result(participant)) {
//             result(participant)[key] !== result(completion)[key] ? answer=key : false
//         }
//     }
//     return answer;
// } 풀이 2 역시 테케 4번 효율성문제로 불가
// + 찾아보니 forin 효율이 안좋다고함

solution()
//return participant.sort().filter((e,i)=> e !== completion.sort()[i])[0] //풀이 1
//효율성 제로