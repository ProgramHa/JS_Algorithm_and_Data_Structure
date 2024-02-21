// 정렬된 배열과 값을 받아 값이 존재하면 인덱스를 존재하지 않으면 -1을 반환하는 함수 작성

function binarySearch(arr, val) {
    var left = 0;
    var right = arr.length - 1;
    var middle;

    while(left < right) {
        middle = Math.floor((left + right) / 2);

        if(arr[middle] === val) return middle;

        else if(arr[middle] < val) left = middle;

        else if(arr[middle] > val) right = middle;
        
        else return -1;
    }
}



/*
binarySearch([1,2,3,4,5],2) // 1
binarySearch([1,2,3,4,5],3) // 2
binarySearch([1,2,3,4,5],5) // 4
binarySearch([1,2,3,4,5],6) // -1
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10) // 2
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95) // 16
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100) // -1
*/