// 배열과 콜백을 받아들이는 재귀 함수 작성
// 배열의 단일 값이 콜백에 전달될 때 true를 반환하면 true를 반환하고 아니면 false 반환

function someRecursive(arr, callback) {
    
}

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false