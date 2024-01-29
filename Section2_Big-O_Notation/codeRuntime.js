/*
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
8*/

function addUpTo(n) {
    return n * (n + 1) / 2;
}

// console.log(addUpTo(6))

var t1 = performance.now();  // 브라우저가 페이지를 만들어 창이 열린 시간을 알려줌
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapesd: ${(t2 - t1) / 1000} seconds.`)
