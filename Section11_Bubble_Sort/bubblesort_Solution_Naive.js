/* 
function bubbleSort(arr) {
    for(var i = 0; i < arr.length; i++) {
        for(var j = 0; j < i-1; j++){
            if(arr[j] > arr[j+1]) {
                // SWAP
                var tmep = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmep;
            }
        }
    }

    return arr;
}
// 위 함수는 정렬된 항목까지 다시 비교하는 불필요한 작업이 있음
*/
/* 
// ES5
function bubbleSort(arr) {
    for(var i = arr.length; i > 0; i--) {
        for(var j = 0; j < i-1; j++){
            if(arr[j] > arr[j+1]) {
                // SWAP
                var tmep = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmep;
            }
        }
    }

    return arr;
} 
*/
// ES2015
function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
    }
    for(let i = arr.length; i > 0; i--) {
        for(let j = 0; j < i-1; j++){
            if(arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
            }
        }
    }

    return arr;
} 

bubbleSort([37, 45, 29, 8]);