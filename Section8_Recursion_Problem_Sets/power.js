// 밑과 지수를 받는 power를 작성, 밑의 거듭제곱을 반환하고 Math.pow()의 기능을 모방
// 음의 밑과 지수는 신경쓰지 말 것

function power(num1, num2) {
    if(num2 === 0) return 1;

    return num1 * power(num1, num2 - 1);
}



// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16