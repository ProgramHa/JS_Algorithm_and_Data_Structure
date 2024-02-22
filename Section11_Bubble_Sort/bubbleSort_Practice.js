// 숫자로 이루어진 배열을 인자로 받는 bubbleSort함수를 정의하고 버블 정렬로 정렬해 배열을 반환

function bubbleSort(arr) {

    for(var i = arr.length; i > 0; i--) {

        for(var j = 0; j < i-1; j++){
            if(arr[j] > arr[j+1]) swap(arr, j, j+1);
        }
    }
   
    return arr;
}

function swap(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}