const dartResult = "10S#0D*3T#";


function solution(dartResult) {

    const sol = (a,b,c) =>{
        switch (b) {
            case "S": Math.pow(a,1)
                break;
            case "D": Math.pow(a,2)
                break;
            case "T": Math.pow(a,3)
                break;    
        }
    }
      let a = dartResult.match(/\d{1,2}[SDT]{1}[*|#]?/g)
      for (let i = 0; i < a.length; i++) {
          let a = a[i].charAt(1)===0? 10 : a[i].charAt(0);
          let b = a ===10 ? a[i].charAt(2) : a[i].charAt(1) 
          let c = a ===10 ? a[i].charAt(3) : a[i].charAt(2)
          sol(a,b,c) 
      }   
}
// let reg = new RegExp(/SDT/g)
solution(dartResult)
console.log(dartResult.match(/\d{1,2}[SDT]{1}[*|#]?/g))
// let a = dartResult.split(/((\d(SDT))[\*\#])/g)

function solution(dartResult) { 
    const object = { 
        "S": 1, 
        "D": 2, 
        "T": 3, 
        "*": 2, 
        "#": -1, 
        'undefined': 1 
    } 
    let darts = dartResult.match(/\d.?\D/g) 
    for(let i = 0; i<darts.length; i++) {
        const dart = darts[i].match(/(\d{1,})(\S|D|T)(\*|#)?/) 
        const score = Math.pow(dart[1], object[dart[2]]) * object[dart[3]] 
        if(darts[i-1] && dart[3] === '*') { darts[i-1] *= object['*'] } darts[i] = score
    }
    return darts.reduce((a, b) => a + b); 
}

