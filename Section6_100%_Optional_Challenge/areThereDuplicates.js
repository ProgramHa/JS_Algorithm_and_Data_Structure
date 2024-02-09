// 가변적인 수의 인수 (a variable number of arguments)를 받아서 전달된 인자 중 중복이 있는 지 확인하는 함수
// 빈도카운터 또는 다중 포인터를 사용하여 해결

function areThereDuplicates(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        let sum = arr[left] - arr[right];
        if(sum === 0) {
            return true;
        }
        else if(sum < 0) {
            right--;
        }
        else {
            left++
        }
    }
    return false;
}
/* 
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
 */

// 실행 안됨