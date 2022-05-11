function solution(a, b) {
    let monthDay = [31,29,31,30,31,30,31,31,30,31,30,31]
    const day = ["FRI","SAT","SUN","MON","TUE","WED","THU"]
    const c =monthDay.reduce((pre,curr,i)=> a > i+1 ? pre+curr : a===i+1 ? pre+b : a===1? b :pre)
    console.log()
    return day[(c-1)%7];
}
solution(1,2)