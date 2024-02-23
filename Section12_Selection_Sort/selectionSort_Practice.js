// 숫자로 이루어진 배열을 인자로 받는 selectionSort함수를 정의하고 선택 정렬로 정렬해 배열을 반환

function selectionSort(arr) {
    var isMinSwap = false;
    for(var i = 0; i < arr.length; i++){
        var min = arr[i];

        for(var j = i; j < arr.length - 1; j++) {
            if(min > arr[j]){
                min = arr[j];
                isMinSwap = true;
            }
            if(isMinSwap) {
                swap(arr, arr[i], arr[j])
                isMinSwap = false;
            }
        }        
    }
   return arr;
    
}

function swap(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}