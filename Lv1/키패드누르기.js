
var lefthand = "*";
var righthand = "#";
var num = {
    1:[0,0],2:[0,1],3:[0,2],
    4:[1,0],5:[1,1],6:[1,2],
    7:[2,0],8:[2,1],9:[2,2],
    "*":[3,0],0:[3,1],"#":[3,2],
}
const distance = (n,i) => {return Math.abs(num[n][0] - num[i][0]) + Math.abs(num[n][1] - num[i][1]) } 
let answer = ""
for (let i = 0; i < numbers.length; i++) {
    let lef = [1,4,7]
    let ref = [3,6,9]
    lef.includes(numbers[i])
    ? (answer += "L") && (lefthand = numbers[i])
    : ref.includes(numbers[i])
        ? (answer += "R") && (righthand = numbers[i])
        : distance(lefthand,numbers[i]) > distance(righthand,numbers[i])
            ? (answer += "R") &&(righthand = numbers[i])
            : distance(lefthand,numbers[i]) < distance(righthand,numbers[i])
                ? (answer += "L") && (lefthand = numbers[i])
                : hand === "right" ? (answer += "R") &&(righthand = numbers[i]) : (answer += "L") && (lefthand = numbers[i])
}



