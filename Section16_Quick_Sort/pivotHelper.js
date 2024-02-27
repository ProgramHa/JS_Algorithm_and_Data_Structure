function pivot(arr, start = 0, end = arr.length - 1) {
    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    var pivot = arr[start];
    var swapIdx = start;

    for(var i = start + 1; i < arr.length; i++) {
        if(pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);

    return swapIdx;
}

// pivot([4,8,2,1,5,7,6,3])
// [4,8,2,1,5,7,6,3]
// [4,2,8,1,5,7,6,3]
// [4,2,8,1,5,7,6,3]
// [4,2,1,8,5,7,6,3]
// [4,2,1,3,5,7,6,8]

// [3,2,1,4,5,7,6,8]