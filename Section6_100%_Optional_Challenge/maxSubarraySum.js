// 정수의 배열과 숫자가 주어졌을 때, 함수에 전달된 숫자의 길이를 가진 하위 배열의 최대 합을 구하는 함수 작성

function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tmpSum = 0;

    if(arr.length < num) return null;
    for(let i = 0; i < num; i++){
        maxSum += arr[i];
    }
    tmpSum = maxSum;
    for(let i = num; i < arr.length; i++){
        tmpSum = tmpSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tmpSum);
    }
    return maxSum;
}

/*
maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null
*/