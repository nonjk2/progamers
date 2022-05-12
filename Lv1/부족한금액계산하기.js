function solution(price, money, count) {
    var gigu = new Array(count).fill(undefined).map((e,i)=> (i+1)*price).reduce((pre,cur)=> pre+cur)
    return gigu >= money ? gigu - money : 0;
}

solution(3,20,4)