// getDigit 함수
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) & 10;
}

// Math.pow = 제곱 계산 ex) i = 2이면 100
// Math.abs = 절대값 계산
// Math.floor = 소수점 내림
// 값을 mod 10 하면 자리수

// digitCount 함수
function digitCount(num) {
    if(num == 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Math.log10 = 10을 제곱해서 num의 값이 나오는 수 계산
// 자릿 수를 얻기 위해 + 1
// 0을 넣으면 오류가 발생할 수 있어 예외적으로 1을 반환

// mostDigits 함수
function mostDigits(nums) {
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

// Math.max - 입력된 두 값 중 더 큰 값을 반환