const nums = [1,2,7,6,4] //127 126 124 176 174 164 276 274 764 
function solution() {
    const isPrime = (n) => {
        for (let i = 2; i <= Math.sqrt(n); i++) {
          if (n % i === 0) {
            return false;
          }
        }
      
        return true;
    }
    let len = nums.length, answer = 0;

    for (let i = 0; i < len - 2; i++) {
        for (let j = i + 1; j < len - 1; j++) {
        for (let k = j + 1; k < len; k++) {
            if (isPrime(nums[i] + nums[j] + nums[k])) {
            answer++;
            }
        }
        }
    }
}
solution()

