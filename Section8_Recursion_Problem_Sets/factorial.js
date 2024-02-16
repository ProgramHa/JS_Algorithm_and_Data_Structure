// 숫자를 받아 팩토리얼을 반환하는 factorial 함수르 작성

function factorial(num) {
    if(num === 0) return 1;
    return num * factorial(num - 1);
}


// factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040